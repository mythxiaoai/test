// 所有模块都通过 define 来定义
define("../js/user/comm-debug", [ "./a-debug", "./b-debug", "./c-debug" ], function(require, exports, module) {
    console.log("进来111");
    module.exports = {
        a: require("./a-debug"),
        b: require("./b-debug"),
        c: require("./c-debug")
    };
});