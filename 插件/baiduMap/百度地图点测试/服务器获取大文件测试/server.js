const koa = require("koa");
const fs = require("fs");

let server = new koa();
server.listen(8080);

server.use(async (ctx,next)=>{
  let res = "file?"
  await new Promise((resolve,reject)=>{
    fs.readFile("./../测试文件/xaxq.csv",null,function(err,data){
      if(err){
        reject(err);
        return;
      }
      res = data;
      resolve(res);
      console.log("读取成功~")
    })
  });
/* let reg =/\b(\d{2,3}.(\d{2,}))\b/g
 res = res.toString().match(reg);
	ctx.body=res.toString();*/
	ctx.body = "200"
})
