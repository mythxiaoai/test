// 所有模块都通过 define 来定义
define("js/user/user/comm", [ "./a", "./b", "./c" ], function(require, exports, module) {
    require("./a");
    require("./b");
    require("./c");
});