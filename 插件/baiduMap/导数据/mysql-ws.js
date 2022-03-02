const http= require("http");
const mysql = require("mysql");
const socket = require("socket.io");

//1.监听的端口
let server =http.createServer((req,res)=>{
  
}).listen(8080);
let wsServer = socket.listen(server);
//连接数据库
let createPool = mysql.createPool({
  post:"localhost",
  port:3306,
  user:"root",
  password:"a62800492",
  database:"test"
})
let i =1;
wsServer.on("connection",sock=>{
  sock.on("str",str=>{
     createPool.query(`INSERT INTO city SET ?`,JSON.parse(str),(err,data)=>{
      if(err){
        console.log("插入失败")
        console.log(err)
        return false;
      }
      console.log(i++)
    });
  })
})

