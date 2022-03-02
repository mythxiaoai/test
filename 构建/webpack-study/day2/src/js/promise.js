let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise");
    },3000);
});

promise.then(res=>{
    console.log(res)
});

export default promise;