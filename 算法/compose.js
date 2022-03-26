

let api = {
  arr:1,
  a(){
    console.log("run a",this.arr);
  },
  async b(){
    console.log("run b",this.arr);
  }
}
let compose = (fn,that)=>{
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









