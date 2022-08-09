const fs =require("fs");
const { resolve } = require("path");
const haha =require("./libs/test.js");

process.on('uncaughtException', (err, origin) => {
  console.log("uncaughtException",typeof err);
  console.log("uncaughtException",Object.keys(err));
  console.log("uncaughtException",JSON.stringify(err));
  fs.writeSync(
    process.stderr.fd,
    `Caught exception: ${err}\n` +
    `Exception origin: ${origin}`
  );
});
process.on('unhandledRejection', (err, origin) => {
  console.log("unhandledRejection",err);
  fs.writeSync(
    process.stderr.fd,
    `Caught exception: ${err}\n` +
    `Exception origin: ${origin}`
  );
});

// ;(function run(){
//   try {
//     // haha();
//     let aa = {code:0,data:123,message:"msg"};
//     console.log(xxx);
//     throw aa
//     // throw "cc"
//   } finally{
//     //优先打印 在抛错
//     console.log(1);
//   }
  
// })();


;(()=>{
  new Promise((resolve,reject)=>{
    throw {code:0,data:123,message:"msg"};
    reject("报错了啦")
  });
})()


