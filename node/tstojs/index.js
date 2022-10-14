
// let code = `let test:string = "123";

// type menu = {"home":"index"};`

// let res = require("@babel/core").transformSync(code, {
//   presets: ["@babel/preset-typescript"],
//   filename: './test.ts',
// });

// console.log(res);

let ts = require("typescript")
let fs = require("fs")

const source = fs.readFileSync("/Users/xiaoai/git/test/node/tstojs/test.ts", "utf8");

//不会对import解析
let result = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS }});

console.log(JSON.stringify(result));

fs.writeFileSync("/Users/xiaoai/git/test/node/tstojs/result.js",result.outputText)