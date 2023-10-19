let arr = [];

for (let i = 0; i < 20; i++) {
  let char = String.fromCharCode((Math.random()*100).toFixed(0));
  arr.push("A");
}

let pagSize = 4;
let res = [];
let pageNo = 0;

// arr.forEach((v,index) => {
//   if(index%pagSize===0)++resIndex;
//   if(!res[resIndex])res[resIndex]=[];
//   res[resIndex].push(v)
// });

// console.log(res);

let a =0;
arr.forEach((v,index) => {
  if(index%pagSize===0){
    console.log(`<div>`);
  }
  console.log("item-",v);

  if((index+1)%pagSize===0){
    console.log("</div>");
  }
});