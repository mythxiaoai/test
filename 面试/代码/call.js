Function.prototype.call = function (context= window) {
   let arg = Array.from(arguments).slice(1);
   context.fn = this;
    //利用this谁调用就指向谁的特性
   let result = context.fn(...arg)
   delete context.fn;
   return result;
}

var foo = {
    value: 1
}
function bar(...arg) {
    console.log(this.value,arg)
}
bar.call(foo,6,2,3);//1

