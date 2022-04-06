// z.mjs

export let z = async ()=>{
  console.log(1);
  let x =  await ((await import("./x.js")).x);
  console.log(2,x);
  let y =  await ((await import("./y.js")).y);
  console.log(4,y);
}