const ws = require("ws");
let wsock_ = null;
module.exports =  async function createWSServer(p) {
  return new Promise((resolve) => {
    const webSocketServer = new ws.Server({
      port: p,
    });

    webSocketServer.on('listening', () => {
      console.log('web socket begins listening');
    });

    webSocketServer.on('connection', (socket, req) => {
      if (wsock_ != null) {
        console.log('reset websocket');
        wsock_.close();
        wsock_ = null;
      }
      wsock_ = socket;

      wsock_.on('message', (data) => {
        data = JSON.parse(data)
        if (data.type === 'terminate') {
          wsock_.close();
          setTimeout(() => {
            webSocketServer.close();
          }, 3000);
          throw 'script program is terminated';
        }
      });


      wsock_.on('close', (code, reason) => {
        console.log('socket is closed:');
        console.log(code);
        console.log(reason);
        wsock_ = null;
      });

      wsock_.on('error', (error) => {
        console.log('socket error:');
        console.log(error);
      });
      const ip = req.connection.remoteAddress;
      console.log(ip + ' is connected');
      resolve(webSocketServer)
    });
  })
}