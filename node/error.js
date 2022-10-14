const fs =require("fs");
const { resolve } = require("path");
const haha = require("./libs/test.js");

function errorFn() { 
  let realConsole = console;
  process.on('uncaughtException', (err, origin) => {
    realConsole.log("uncaughtException",err);
    fs.writeSync(
      process.stderr.fd,
      `Caught exception: ${err}\n` +
      `Exception origin: ${origin}`
    );
      process.exit();
  });
  process.on('unhandledRejection', (err, origin) => {
    realConsole.log("unhandledRejection",JSON.stringify(err));
    fs.writeSync(
      process.stderr.fd,
      `Caught exception: ${err}\n` +
      `Exception origin: ${origin}`
    );
    process.exit();
  });
  
}


(async function run() {
  errorFn();
  console = consoleDeal(false);
  console.log("aaa")
   // daemon(null);
    await new Promise(res=>setTimeout(res,2000))
    // haha();
    let aa = {code:0,data:123,message:"msg"};
    throw aa
    // throw aa
})();


// ;(()=>{
//   new Promise((resolve,reject)=>{
//     throw {code:0,data:123,message:"msg"};
//     reject("报错了啦")
//   });
// })()

function daemon(driver) { 
  console.log("bbb");
  time = setInterval(() => {
    console.log("cccc");
    try {
      driver.executeScript('javascript:void(0);');
    } catch (error) {
      throw "用户关闭浏览器"
    }
  }, 400);
  return () => { 
    clearInterval(time);
  }
}


function consoleDeal(boo = false) {
  //处理报错  防止  api.a()运行报错
  return new Proxy(console, {
    get(targt, key) {
      if (boo) {
        return targt[key].bind(targt);
      } else {
        if (typeof targt[key] === 'function') {
          return () => { };
        }
      }
    }
  });
}

