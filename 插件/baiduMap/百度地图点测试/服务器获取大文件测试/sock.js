const socket = require("socket.io");
const fs = require("fs");


let wsServer=socket(8080);
wsServer.on("connection",sock=>{
  let i =0;
  let rs = fs.createReadStream("./../测试文件/xaxq.csv");
  //let rs = fs.createReadStream("./xaxq222.csv");
  //let rs = fs.createReadStream("./test.csv");
  let pre =new Buffer(0);
  let reg =/\b(\d{2,3}.(\d{2,}))\b/g;
/*  rs.setEncoding('UTF8');*/
  rs.on("data",(data)=>{
    if(pre.length>0){
      //头
      data = Buffer.concat([pre.slice(pre.lastIndexOf("\r\n"),pre.length),data]);
    }
    pre = data;
    data = data.slice(0,data.lastIndexOf("\r\n"));
    sock.emit("data",data.toString().match(reg))
    console.log(`${i++}解析中...`)
  })
  
  
  rs.on("end",()=>{
    sock.emit("end","读取成功")
  })
  
  
  rs.on('error', function(err){
   console.log(err);
  });
  
})

