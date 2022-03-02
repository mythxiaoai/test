
//造数据
let arr = []
for (let i = 0; i < 99999; i++) {
  arr.push({ id: i, name: String.fromCharCode(i) })
}



console.time("for");
for (let i = 0; i < arr.length; i++) {
  let obj = arr[i];
  if (obj.name == "A") {
    console.log(obj.name.charCodeAt());
  }
}
console.timeEnd("for");

console.time("for.length外移");
for (let i = 0,len=arr.length; i < len; i++) {
  let obj = arr[i];
  if (obj.name == "A") {
    console.log(obj.name.charCodeAt());
  }
}
console.timeEnd("for.length外移");
console.time("for.length变量外移");
let i = 0,len=arr.length
for (; i < len; i++) {
  let obj = arr[i];
  if (obj.name == "A") {
    console.log(obj.name.charCodeAt());
  }
}
console.timeEnd("for.length变量外移");





(() => {
  //for(let i = 0,len=arr.length;i<len;i++){}  性能最高
  for (let i = 0, len = arr.length; i < len; i++) {
    console.log("for:" + arr[i]);
  }
  console.log("-------------------------------------------");


  //arr  forEach(function(value,index,all)   了解
  arr.forEach(function (value, index, all) {
    console.info("forEach:" + value);
  });
  console.log("-------------------------------------------");


  //for in  --array  常用
  for (let index in arr) {
    console.log("for-in--array:" + arr[index]);
  }
  console.log("-------------------------------------------");


  //for in  --object 常用
  for (let key in json) {
    console.log("for-in--object:" + key);
    console.log("for-in--object:" + json[key]);
  }
  console.log("-------------------------------------------");


  //for of --array  不能用于object 常用
  for (let val of arr) {
    console.log("for-of--array:" + val);
  }
  console.log("-------------------------------------------");


  //each--array  常用
  $.each(arr, function (index, val) {
    if (index == 0) return;
    console.log("$.each-index:" + index);
    console.log("$.each-val:" + val);
  });
  console.log("-------------------------------------------");


  //each--object	常用
  $.each(json, function (key, val) {
    console.log("$.each-key:" + key);
    console.log("$.each-val:" + val);
  });
  console.log("-------------------------------------------");


  //each--doms	常用
  //alert(Array.isArray($("li")))
  $("li").each(function (index, dom) {
    console.log("$.each-index:" + index);
    console.log("$.each-val:" + dom);
  });
})

