// 所有模块都通过 define 来定义
define("js/user/user/comm-debug", [ "./a-debug", "./b-debug", "./c-debug" ], function(require, exports, module) {
    require("./a-debug");
    require("./b-debug");
    require("./c-debug");
});