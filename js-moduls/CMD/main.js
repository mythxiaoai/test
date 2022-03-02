// 所有模块都通过 define 来定义
define(function(require, exports, module) {
  // 通过 require 引入依赖
   let $ = require('jquery');
   console.log($)
  var Spinning = require('a');
	console.log(Spinning)
  // 通过 exports 对外提供接口
  exports.doSomething =()=>{console.log(Spinning)}

  // 或者通过 module.exports 提供整个接口
});