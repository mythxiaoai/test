let api;
let loadData =async ()=>{
  return new Promise(r => setTimeout(()=>{
    r("res-loadData");
  }, 1000))
};
let loadDataRes = null
  api =  {
    async _makeupInit(){
      if(loadDataRes)return;
      loadDataRes = await loadData();
    },
    async makeup(){
      await this._makeupInit();
      console.log("执行过初始化的美妆方法",loadDataRes);
    }
  }
export { api};