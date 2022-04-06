let api;
let loadData =async ()=>{
  return new Promise(r => setTimeout(()=>{
    r("res-loadData");
  }, 1000))
};
let loadDataRes = null
  api =  {
    async _makeupinit(){
      if(loadDataRes)return;
      loadDataRes = await loadData();
    },
    makeup(){
      console.log("执行过初始化的美妆方法",loadDataRes);
    }
  }


  let pApi = new Proxy(api,{
    async get(obj,key,proxy){
      if(typeof obj[key] !== "function")return obj[key];
      if(key[0]==="_")return obj[key];
      //先执行前置条件在执行业务方法
      console.log("运行1");
      await api._makeupinit();
      console.log("运行2");
      return obj[key]
    }
  })
export { pApi as api};