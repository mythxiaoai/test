let loadTemplate = async ()=>{
  return new Promise(r => setTimeout(()=>{
    r("res-loadData");
  }, 1000))
};
let loadDataRes = await loadTemplate();

const makeup ={
  makeupInitFn(){
    console.log("执行过初始化的美妆方法",loadDataRes);
  }
}

export {makeup}