Function.prototype.before = function (beforefn) {
  var __self = this; // 保存原函数的引⽤
  return function () {
    // 返回包含了原函数和新函数的"代理"函数
    beforefn.apply(this, arguments); // 执⾏新函数，且保证 this 不被劫持，新函数接受的参数 // 也会被原封不动地传⼊原函数，新函数在原函数之前执⾏
    return __self.apply(this, arguments); // 执⾏原函数并返回原函数的执⾏结果， // 并且保证 this 不被劫持
  };
};
Function.prototype.after = function (afterfn) {
  var __self = this;
  return function () {
    var ret = __self.apply(this, arguments);
    afterfn.apply(this, arguments);
    return ret;
  };
};

let fn = function (str) {
  console.log("fn", str);
  return str
};

let before = function (v) {
  console.log("before");
};
let after = function (v) {
  console.log("after");
};

fn = fn.before(before).after(after);

//1.调用 这里是after返回回来的定义
let res= fn("run");
console.log(res)//run
//注意 构造器需要在函数创建之前调用 否则原型链上挂载不上去
/**
before
fn run
after
 */