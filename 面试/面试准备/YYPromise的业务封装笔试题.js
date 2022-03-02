//YY笔试面试题
/**
 * 问题  如何 实现下面的cancelCompose方法，目的是为了在执行在做异步编程时可以取消。
 * 思路用高阶函数的方式实现让promise提前进入reject;
 */
function ajax(str, time, boolean = true) {
  console.log("运行");
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      boolean ? reslove(str + "成功") : reject("失败");
    }, time || 1000);
  });
}

function cancelCompose(fn) {
  return (...arg) => {
    let errorFn;
    let p = new Promise((reslove, reject) => {
      errorFn = reject;
      let res = fn(...arg);
      //关键点是这里，把外层34含的.then处理方法，放在内层的fn promise的回调函数上,这里需要判断res执行是否是promise对象省略了
      res.then(reslove, reject);
    });
    p.cancel = errorFn;
    return p;
  };
}

//promise方法
let superAjax = cancelCompose(ajax);
let result = superAjax("数据~", 2000);

result.then(
  (v) => {
    console.log(1);
    console.log(v);
  },
  (error) => {
    console.log(2);
    console.log(error);
  }
);

setTimeout(() => {
  result.cancel("提前取消"); //结果会打印 2  提前取消
}, 1000);
