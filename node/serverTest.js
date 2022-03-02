const http = require('http')
const server = http.createServer((request, response) => {



  // response.setHeader("Access-Control-Allow-Origin","*");
  // response.setHeader("Access-Control-Allow-Credentials","true");

//   res.writeHead(200, { "Access-Control-Allow-Origin": "http://localhost:3000",
//   "Access-Control-Allow-Headers": "X-Token,Content-Type",
//   "Access-Control-Allow-Methods": "PUT" }); 
// res.end();

// // node.js 
// // 预检options中和/users接口中均需添加 允许客户端携带验证信息
// res.setHeader('Access-Control-Allow-Credentials', 'true'); 

  console.log("来了~");
  console.log(request.headers);
  console.log(request.url);

 
  response.writeHead(302, {'Location': 'dingtalk://dingtalkclient/action/open_micro_app?miniAppId=5000000001080687&agentId=1290759366&pVersion=1&packageType=1&corpId=dingaf24416fadd7380135c2f4657eb6378f&page=pages%2Findex%2Findex%3Fx%3D%7B%22id%22%3A59%2C%22mark%22%3A%22develop%22%7D'});
  response.end();
  
})
server.listen(80)