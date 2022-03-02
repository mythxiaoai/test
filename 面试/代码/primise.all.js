function sleep(val) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(val);
      }, val)
    })
  }

let all = (arr) => {
  let aResult = []; //用于存放每次执行后返回结果
  return new Promise(function(resolve, reject) {
    let i = 0;
    next(); // 开始逐次执行数组中的函数(重要)
    function next() {
      arr[i].then(function(res) {
        aResult.push(res); // 存储每次得到的结果
        i++;
        if (i == arr.length) {
          // 如果函数数组中的函数都执行完，便resolve
          resolve(aResult);
        } else {
          next();
        }
      });
    }
  });
};

console.time("start");
all([sleep(2000),sleep(2500),sleep(2000)]).then(res=>{
    console.log(res);
    console.timeEnd("start");
})
