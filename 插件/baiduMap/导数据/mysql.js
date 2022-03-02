const express= require("express");
const body= require("body-parser");
const mysql = require("mysql");
const multer= require("multer");

//1.监听的端口
let server =express()
server.listen(8080)
//连接数据库
let createPool = mysql.createPool({
  post:"localhost",
  port:3306,
  user:"root",
  password:"a62800492",
  database:"test"
})
//注册中间件
//为普通模式
let num =1;
server.use(body.urlencoded({extended: false}));

let multerObj=multer({dest: './upload/'});
server.use(multerObj.any());

server.use("/insert",(req,res)=>{
  let arr=JSON.parse(req.body.str);
  for(let i = 0,len=arr.length;i<len;i++){
    createPool.query(`INSERT INTO city SET ?`,arr[i],(err,data)=>{
      if(err){
        console.log("插入失败")
        console.log(err)
        return false;
      }
    });
  }
  res.send(arr.length+"");
})

//静态文件
server.use(express.static("./static/"));
