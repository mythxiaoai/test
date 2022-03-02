// 所有模块都通过 define 来定义
define(function(require, exports, module) {
	console.log(2)
	require('./comm')
  /*var Spinning = require('comm');
	console.log(Spinning)
  // 通过 exports 对外提供接口
  exports.doSomething =()=>{console.log(Spinning)}

  // 或者通过 module.exports 提供整个接口*/
});