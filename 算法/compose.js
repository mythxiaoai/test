

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

let compose = (fn,that)=>{
  if(typeof fn !== "function")return fn;
    return (...arg)=>{
      console.log("监听到");
      return fn.call(that,...arg); 
    }
}

for (let key in api) {
  api[key] = compose(api[key],api);
}

api.a()
api.b()

//满足要求  做闭包内部劫持  对结果先一步处理   执行的步骤和勾子   执行前   执行   执行后









