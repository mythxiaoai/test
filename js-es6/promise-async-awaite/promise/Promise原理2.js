//发布订阅模式
class Promise{
  constructor(fn){
    this.fn = fn;
    this.callBacksSuccesss = [];//成功的回调集
    this.callBacksErrors = [];//失败的回调集
    fn(this.resolve.bind(this),this.reject.bind(this));
  }
  //成功发布
  resolve(val){
    this.callBacksSuccesss.forEach(cb=>cb(val))
  }
  //错误发布
  reject(val){
    this.callBacksErrors.forEach(cb=>cb(val))
  }
  //依赖收集
  then(resolve,reject){
    resolve&&this.callBacksSuccesss.push(resolve);
    reject&&this.callBacksErrors.push(reject);
    return this;
  }

}

function ajax(v){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log(Object.prototype.toString.call(this));
      resolve(v)
      //reject("失败")
    },2000)
  })
}
ajax("成功").then(v=>{
  console.log(v);
},error=>{
  console.log(error);
}).then(v=>{
  console.log(v);
},error=>{
  console.log(error);
})