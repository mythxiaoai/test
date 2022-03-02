const koa = require("koa");
const router = require("koa-router");
const bodyParser = require('koa-bodyparser');
const get = require("./libs/request.js");


let server = new koa();
server.listen(80,function(){
    console.log("已启动~");
});

let r1 = router();
server.use(r1.routes());
server.use(bodyParser())

r1.get("/",async (ctx,next)=>{
    console.log(ctx.body);
    ctx.body="true"
})

// ;(async ()=>{
//     const grant_type = "client_credential";
//     const appid = "wx018793069c931666";
//     const secret = "a2d11caf33476c6d0e57a4bb000946b5";
// 	let {body} = await get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=${grant_type}&appid=${appid}&secret=${secret}`);
//     body = body.toString();
//     body = JSON.parse(body);
//     const access_token = body.access_token;
//     console.log(access_token);
    
// 	/*let $ = cheerio.load(body)
// 	$("img").each(async function(){
// 		let url =$(this).attr("src");
// 		let {host,path} = urllib.parse(url);
// 		let name = path.substring(path.lastIndexOf("/")+1);
// 		console.log(url)
// 		let {body} = await get(url);
// 		fs.writeFile("img/"+name, body,null,err=>{
// 			console.log(err)
// 		})
// 	})*/
// })();

// https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET

