const koa = require("koa");
const bodyparser = require("koa-bodyparser");
const crypto = require('crypto')
const router = require("koa-router");
const staticCache = require("koa-static-cache");
const cors = require('koa-cors')   // npm i koa-cors

const db = require("./lib/fsdb.js");
const { oss, ossdomain } = require("./lib/config.js");

let server = new koa();
server.listen(9000, () => {
  console.log("listening at http://localhost:9000/index.html")
});
// server.use(convert(betterBody()));
server.use(bodyparser());
server.use(cors())

let app = router();
server.use(app.routes());
server.use(staticCache("./../client"));

/**
 * 1. find 检查原本文件是否已经上传传功，如果成功则直接返回  ids  id md5
 * 2. getPolicy 获取签名
 * 3. saveupload 上传完成数据插入数据库
 */
/**
 * /find 查找文件
 *  @params ids  输入 ids:Array  输出:[{fid:1...}];  else  []  列表有多个附件时候会需要加载
 *  @params id   输入id:String 输出[{fid:1...}]  else  []  列表有多个附件时候会需要加载
 *  @params md5 输入md5:String 输出[{fid:1...}]  else  []  根据md5查询判断是否已经上传过，如果已经上传返回上传的值  达到秒传的目的
 *  @return Array 文件对象
 */
app.post("/upload/find", async (ctx) => {
  //装载数据
  let params = ctx.request.body;
  let files = [];
  files = db.get("files") || [];
  if (params.md5) {
    files = files.filter(v => v.md5 == params.md5);
  }
  if (params.ids) {
    files = files.filter(v => params.ids.includes(v.id));
  }
  if (params.id) {
    files = files.filter(v => v.id == params.id);
  }
  ctx.response.body = files;
})

/**
 * 获取自定义授权信息
 * /upload/getPolicy
 * @params  md5:String 文件md5值
 * @retrun  Object
 * 
 * example
 * {
 * OSSAccessKeyId: oss.id,
 * policy: policyStr,
 * signature,
 * key: md5,
 * endPoint: domain
 * }
 * 
 */
app.post("/upload/getPolicy", async (ctx) => {
  let { md5 } = ctx.request.body;
  //https://help.aliyun.com/document_detail/31988.html?spm=a2c4g.11186623.6.1687.46fa7acdN9FXGs#section-wny-mww-wdb   policy  signature 加密规则
  let policy = {
    // 签名10分钟有效
    expiration: new Date(Date.now() + 600000).toISOString(),
    conditions: [
      { bucket: oss.bucket },
      { key: md5 }//Object名称
    ]
  }
  let policyStr = Buffer.from(JSON.stringify(policy)).toString('base64')
  let signature = crypto.createHmac('sha1', oss.secret).update(policyStr).digest('base64');
  let domain = ossdomain ? ossdomain : `https://${oss.bucket}.${oss.endpoint}`
  let info = {
    OSSAccessKeyId: oss.id,
    policy: policyStr,
    signature,
    key: md5,
    endPoint: `https://${oss.bucket}.${oss.endpoint}`
  }
  ctx.response.body = info;
})
/**
 * 保存上传信息
 * @params name:String  文件名
 * @params type:String  文件类型  mintype
 * @params size:Number  大小  用来排查
 * @params md5:String   文件md5值
 * @return Array 文件对象  这里是为了保证跟find的检查接口一致做秒传判断需要
 * 
 * example
 [
    {
      "id": 1,
      "url": "https://mars-view-test.companyP2.shop/45b93521a755754f4756653fcbb03e1d",
      "osspath": "45b93521a755754f4756653fcbb03e1d",
      "name": "a.jpg",
      "type": "image/jpeg",
      "size": 1330230,
      "md5": "45b93521a755754f4756653fcbb03e1d",
      "uploader": "自己",
      "createTime": "2021-06-10T14:14:23.304Z",
      "updateTime": "2021-06-10T14:14:23.304Z"
  }
 ]
 */
app.post("/upload/save", async (ctx) => {
  //装载数据
  let { name, type, size, md5 } = ctx.request.body;
  let host = ossdomain ?? `https://${oss.bucket}.${oss.endpoint}`
  let id = Date.now();
  let res = {
    id: id,
    url: `${host}/${md5}`,
    osspath: md5,
    name, type, size, md5,
    uploader: "自己",
    createTime: new Date,
    updateTime: new Date,
  };
  let files = db.get("files") || [];
  files.push(res);
  db.set("files", files);
  ctx.response.body = [res];
})
/**
 * 删除  纯粹演示需要  实际业务不需要写
 * /del 删除文件
 * @params ids  输入 ids:Array  输出:"OK"
 */
app.post("/upload/del", async (ctx) => {
  let params = ctx.request.body;
  let files = db.get("files") || [];
  if (params.ids) {
    files = files.filter(v => !params.ids.includes(v.id));
  }
  db.set("files", files);
  ctx.response.body = "OK";
})


