let a = [3,2,1,6,7]
let r = [];
for (let i = 0; i < a.length; i++) {
    setTimeout(()=>r.push(a[i]),a[i]*10);    
}
setTimeout(()=>{
    console.log(r);
},Math.max(...a)*10)