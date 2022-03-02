let c = require("./c.js");
let d = require("./d.js");
let res = [];
d.map((c) => {
    res.push({
        地市: c.name,
        值: 0,
      });
});
console.log(JSON.stringify(res));
