var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({port:8080});

wss.on("connection",function(ws){
	console.log("有客户端连接上了..."+ws);
	ws.on("message",function(message){
		console.log("客户端发送过来的消息是:"+message);
		ws.send("服务器发送的数据：我不爱你");
	})
})

