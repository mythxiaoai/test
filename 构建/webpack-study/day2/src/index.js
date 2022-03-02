let str = require("./js/a.js")

let {Person} = require("./js/class")
let promise = require("./js/promise")
let gennertor = require("./js/gennertor")
console.log(str);
console.log("我要熟练webpack")

/*
这里调用的顺序  直接影响 style里面的样式先后顺序
*/
require("./css/index.css");
require("./css/index.scss")
require("./css/index.less");
require("./css/index.styl");

//验证下剪头函数
let fn = ()=>{
    console.log(1);
}
fn();
//验证class
let p = new Person();
console.log(p.a)
console.log(p.b)
console.log(Person.c)




