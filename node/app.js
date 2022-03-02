var http = require('http');
 
var server = http.createServer(function (req, res) {
    res.writeHead(302, {'Location': 'dingtalk://dingtalkclient/action/open_micro_app?miniAppId=5000000001080687&agentId=1290759366&pVersion=1&packageType=1&corpId=dingaf24416fadd7380135c2f4657eb6378f&page=pages%2Findex%2Findex%3Fx%3D%7B%22id%22%3A59%2C%22mark%22%3A%22develop%22%7D'});
    res.end();
});
 
server.listen(80);


