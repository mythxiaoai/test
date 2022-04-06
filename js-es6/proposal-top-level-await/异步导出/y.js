export let y = new Promise(r => setTimeout(()=>{
  r("Y-result");
}, 1000));