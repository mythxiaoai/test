function sleep(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(1);
        },1000)
    })
}


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



sleep().then(res=>{
    console.log(res);
}).then(res=>{
    console.log(res);
}).then(res=>{
    console.log(res);
})