// 所有模块都通过 define 来定义
define("../js/user/main-debug", [ "./comm-debug", "./a-debug", "./b-debug", "./c-debug" ], function(require, exports, module) {
    console.log(2);
    require("./comm-debug");
});