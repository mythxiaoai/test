export let x = new Promise(r => setTimeout(()=>{
  r("X-result");
}, 1000));