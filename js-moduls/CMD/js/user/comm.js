// 所有模块都通过 define 来定义
define(function(require, exports,module) {
	console.log("进来111")
  module.exports={
  	a:require("./a"),
  	b:require("./b"),
  	c:require("./c"),
  };
});