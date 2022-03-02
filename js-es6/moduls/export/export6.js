// 写法一
//export var m = 1;

// 写法二
let m = 1;
//export {m};

// 写法三
let n = 1;
export {n as m};

//方法
// 正确
export function f() {};

// 正确
//function f() {}
//export {f};