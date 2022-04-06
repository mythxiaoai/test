export let a = new Promise(r => setTimeout(()=>{
  r("a-result");
}, 1000));