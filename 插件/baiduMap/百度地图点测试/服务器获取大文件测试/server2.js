const koa = require("koa");
const fs = require("fs");

let server = new koa();
server.listen(8080);

server.use(async (ctx,next)=>{
  let res = "file?"
  await new Promise((resolve,reject)=>{
    fs.open('./../测试文件/test.txt', 'r', function(err, fd) {
        if (err) {
            throw err;
        }
        console.log('open file success.');
        var buffer = new Buffer(1024*1024);
        // 读取文件
        fs.read(fd, buffer, 0, 10, 0, function(err, bytesRead, buffer) {
            if (err) {
                throw err;
            }
            // 打印出buffer中存入的数据
            console.log(bytesRead, buffer.slice(0, bytesRead).toString());
     
            // 关闭文件
            fs.close(fd);
        });
    });
  });
/* let reg =/\b(\d{2,3}.(\d{2,}))\b/g
 res = res.toString().match(reg);
	ctx.body=res.toString();*/
	//ctx.body = res.toString();
})
