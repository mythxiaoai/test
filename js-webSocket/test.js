const createWSServer = require("./server.js");


try {
  (async () => { 
    console.log("前");
    let wss = await createWSServer("8081");
    console.log("回来test");
    // process.exit()
    wss.close()
  })()
} catch (error) {
    console.log(error);
}