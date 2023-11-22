function sleep(val,boo) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      boo ?resolve(val):reject(val);
    }, val)
  })
}


let resolve = null;
let reject = null;
let p = new Promise((a,b)=>{
  resolve = a;
  reject = b;
});
setTimeout(() => {
  resolve(666);
}, 5000)

;(async()=>{
  let res = await p;
  console.log(res);
})()
