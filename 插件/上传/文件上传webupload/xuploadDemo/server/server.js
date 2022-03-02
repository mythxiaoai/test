const koa = require("koa");
const betterBody = require("koa-better-body");
const convert = require("koa-convert");
const router = require("koa-router");
const staticCache = require("koa-static-cache");
const pathlib = require("path");
const fs = require("fs");


let server = new koa();
let port = 8086;
server.listen(port,()=>{
  console.log(`listening at http://localhost:${port}/index.html`)
});

server.use(convert(betterBody({
  uploadDir:pathlib.resolve('./upload'),
  keepExtensions:true,
  maxFileSize:2 * 1024 * 1024* 1024* 1024
})));

let rm = router();
server.use(rm.routes());

rm.post("/upload",async (ctx,next)=>{
  //装载数据
  let param =ctx.request.fields;;
  let files = param.file;
  //上传的东西一分钟删除
    setTimeout(()=>{
      for(let file of files){
        fs.unlink(`./../web/demo/${file.filename}`,function(error){
          if(error){
            console.log(error)
            return false;
          }
           console.log(`删除文件${file.originalname}成功`);
        })
      }
    },5000)
  ctx.response.body="上传成功";
})

rm.post("/uploadFile-checkblock",async (ctx,next)=>{
  let param = ctx.request.fields;
  /*
   *    1.检查是否有已经上传过的文件
   *      Y：直接返回  "all"
   *      N：检查该是否上传完整
   *    2.是否存在文件夹
   *      Y:存在  读取文件夹里面的分片返回已经上传过的分片文件名  [0,1,2,3]
   *      N：直接返回   []
   * 
   */
  let existsFile= fs.existsSync(`./upload/${param.saveName}`);
  if(existsFile){
    //存在直接返回
    ctx.response.body="all";
  }else{
    //是否存在文件夹
    let existsDir = fs.existsSync(`./upload/${param.md5}`);
    if(existsDir){
      //文件存在
      //读取上传进度
      let data = fs.readdirSync(`./upload/${param.md5}`);
      ctx.response.body=data;
    }else{
      ctx.response.body=[];
    }
  }
})

rm.post("/uploadFile",async (ctx,next)=>{
/**
 * 1.根据参数chunks判断是否分片
 *    Y:
 *    N:直接保存,返回
 * 2.判断保存分片的文件夹是否存在，不存在就创建一个
 *    Y:保存即可
 * 
 */
  let param = ctx.request.fields;
  let currfileName = pathlib.basename(param.file[0].path);
  let currextName = pathlib.extname(param.file[0].path);
  
  //是否分片
  if(param.md5&&param.chunks){
    let exists = fs.existsSync(`./upload/${param.md5}`)
    if(!exists){
      //不存在创建
        fs.mkdirSync(`./upload/${param.md5}/`);
      }
      //移动
      fs.renameSync(`./upload/${currfileName}`,`./upload/${param.md5}/${param.chunk}`);
      console.log(`--文件分割，${param.chunk*1+1}/${param.chunks}上传成功--`);
      ctx.response.body=`文件分割，${param.chunk*1+1}/${param.chunks}上传成功`;
  }else{
    //文件未分片的情况，重命名为md5的文件名
    if(param.md5){
      fs.renameSync(`./upload/${currfileName}`,`./upload/${param.md5}${currextName}`);
      console.log('--文件未分割，更名成功--');
    }
     ctx.response.body="文件未分割，上传成功";
  }
});

rm.post("/uploadFile-mergeblock",async (ctx,next)=>{
  //合并文件
  //找到对应文件夹
  //合并文件
  //删除原文件夹
    let param = ctx.request.fields;
    let data = fs.readdirSync(`./upload/${param.md5}`);
    //顺序合并0-1-2-3...
    data = data.sort((a,b)=>a-b);
    data = data.map(v=>{
      let content = fs.readFileSync(`./upload/${param.md5}/${v}`)
      fs.appendFileSync(`./upload/${param.saveName}`, content)
      //删除文件
      fs.unlinkSync(`./upload/${param.md5}/${v}`);
    })
    //删除目录
    fs.rmdirSync(`./upload/${param.md5}`);
    ctx.response.body="合并成功";
})
server.use(staticCache("./../"));
