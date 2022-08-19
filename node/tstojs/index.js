
// let code = `let test:string = "123";

// type menu = {"home":"index"};`

// let res = require("@babel/core").transformSync(code, {
//   presets: ["@babel/preset-typescript"],
//   filename: './test.ts',
// });

// console.log(res);

let ts = require("typescript")

const source = `
let test:string = "123";

type menu = {"home":"index"};
`;

let result = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS }});

console.log(JSON.stringify(result));