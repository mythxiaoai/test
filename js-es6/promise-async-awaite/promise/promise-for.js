//解决循环内部的primise  用   for of 或者  for in  或者  for循环 不要用回调

//模拟ajax
function ajax(str, time, boolean=true) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      boolean ? reslove(str + "返回结果成功") : reject("失败");
    }, time || 1000);
  });
}




let param = {test:1};
async function run (params={},cb){
  let res = [];
  for (const v of ["a","b"]) {
    res.push(ajax(v));
    params[v] = await ajax(v)
  }
}

(async ()=>{
    let res =await run(param);
    console.log(param);
})()

