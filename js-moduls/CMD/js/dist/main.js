// 所有模块都通过 define 来定义
define("../js/user/main", [ "./comm", "./a", "./b", "./c" ], function(require, exports, module) {
    console.log(2);
    require("./comm");
});