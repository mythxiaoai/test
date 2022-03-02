Function.prototype.apply = function (context= window,args) {
   context.fn = this;
    //利用this谁调用就指向谁的特性
   let result = context.fn(...args)
   delete context.fn;
   return result;
}

var foo = {
    value: 1
}
function bar(...arg) {
    console.log(this.value,arg)
}
bar.apply(foo,[6,2,3]);//1

