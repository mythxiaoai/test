let arr = new Set(["a", "b", "c"]);
arr.add("c");
arr.add("d");

arr.delete("a");
arr.clear();
console.log(arr);//Set(0) {}

//数组去重
let a = [1,2,2,5,2,9,9,1,3,2];
let b =[...new Set(a)]
console.log(b);//[ 1, 2, 5, 9, 3 ]


