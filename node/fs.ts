const fs = require("fs");
const path = require("path");
const src = path.join(__dirname, "./log.text")
setInterval(() => {
  let time = new Date();
  let str = time.toLocaleString()
  fs.appendFileSync(src, `${str}\r\n`);
}, 1000);

