function sleep() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1);
    }, 2000)
  })
}

function cancelCompose(fn) {
  return (...arg) => {
    let rejectFn = null;
    let p = new Promise((resolve, reject) => {
      let res = fn(...arg);
      rejectFn = reject;
      res.then(resolve, reject);
    });
    p.cancel = rejectFn;
    return p;
  }
}


//promise方法
let superAjax = cancelCompose(sleep);
let result = superAjax("数据~", 2000);

result.then(
  (v) => {
    console.log(1,"a");
    console.log(v,"b");
  },
  (error) => {
    console.log(2);
    console.log(error);
  }
);

setTimeout(() => {
  result.cancel("提前取消"); //结果会打印 2  提前取消
}, 1000);
