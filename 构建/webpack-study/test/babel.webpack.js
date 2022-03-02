const Webpack = require("webpack");
const fs = require("fs");
let fileJS = fs.readdirSync("js");



let entry = {};
fileJS.map(v=>{
  console.log(v);
  entry[v] = ['babel-polyfill',`${__dirname}/js/${v}`]
})
console.log(entry);
module.exports = {
  //mode:"development",
  mode: "production", //模式, 默认两种 production development 
  entry:entry,
  output: {
    path: __dirname + "/dist/",
    filename: '[name]',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      //use:"babel-loader",
      use: {
        loader: "babel-loader",
        options: {
          "presets": ["env", 'es2015', 'stage-3']
        }
      }
    }]
  }
}
