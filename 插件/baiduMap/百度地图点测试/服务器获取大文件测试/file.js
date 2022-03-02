const fs = require("fs");
/* fs.readSync("./../测试文件/test.csv", buffer, 0, buffer.length, 0,function(err,bytesRead,buffer){
    if(err){
      console.log(err);
      return;
    }
    console.log(bytesRead)
    console.log(buffers)
    console.log("读取成功~")
  })*/
//let rs = fs.createReadStream("./../测试文件/xaxq.csv");
let rs = fs.createReadStream("./../测试文件/test.csv");
//rs.setEncoding('UTF8');
let buffer =new Buffer(0);
let i = 0;
rs.on("data",(data)=>{
  buffer = Buffer.concat([buffer,data]);
})
rs.on("end",(data)=>{
  console.log(buffer.length)
  console.log("读取成功~")
})
rs.on('error', function(err){
   console.log(err.stack);
});