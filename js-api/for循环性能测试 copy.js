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