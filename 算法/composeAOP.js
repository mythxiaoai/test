

let api = {
  arr:1,
  a(){
    console.log(this);
    console.log("run a",this.arr);
  },
  async b(){
    console.log("run b",this.arr);
  }
}
Function.prototype.after = function (afterfn) {
  //3. 当前的__self是当前执行环境，是before的返回
  var __self = this;
  return function () {
    //4. 执行调用
    var ret = __self.apply(this, arguments);
    // 10 我被执行
    afterfn.apply(this,[ret,...arguments]);
    //返回结果
    return ret;
  };
};

let afterError = (...arg)=>{
  console.log(arg,"afterError");
}

for (const key in api) {
  if(typeof api[key] === "function"){
    api[key] = api[key].after(afterError);
  }
}

api.b(3,4,5);//[ Promise { undefined }, 3, 4, 5 ] afterError


//我所希望的是做拦截错误处理
//这个方案会串行处理，并不能满足业务需求，只能满足流水线的方式








