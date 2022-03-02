const person = {
  name: "myth",
  age: 21,
};


person.city=undefined;
//这里在内存里面是把推内存的值复制给栈内存的city
let city = person.city;
city = "GUANGZHOU";
console.log(person);//{ name: 'myth', age: 21, city: undefined }