class Person{
}
Person.prototype.name = "a"
var objA = new Person();
var objB = new Person();
objA.__proto__.name = "A"

Person.prototype.name="B"

console.log(objA.name);//B
console.log(objB.name);//B
//得出的结论是：没有重新分配空间  应该是在声明  ClassFn的时候就已经存在了   只是猜想
console.log(objA.__proto__ === objB.__proto__);//true
console.log(objA);//true 
//获取prototype对象
console.log(Object.getPrototypeOf(objA));//true

