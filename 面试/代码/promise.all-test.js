function sleep(val,boo) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      boo ?resolve(val):reject(val);
    }, val)
  })
}


let p1 = sleep(2000,false);
let p2 = sleep(3000,true);

(async ()=>{
  let res1 =  await Promise.allSettled([p1,p2]);
  let res2 =  await Promise.allSettled([p1,p2]);
  console.log(res1);
  console.log(res2);
})()
