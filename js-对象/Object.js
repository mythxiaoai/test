function Person(){
    //自有属性  不会
    this.a = ["a"];
}
//引用型的prototype会相互关联
Person.prototype.b=["b"];
function Myth(){
    Person.call(this)
    this.c = ["c"];
}
Myth.prototype=Person.prototype;
Myth.prototype.constructor=Myth;
Myth.prototype.d=["d"];
let myth = new Myth();
let person = new Person();
// console.log(myth.b);
// myth.b.push("+");
// console.log(myth.b);
// console.log(person.b);

console.log(myth.a);
myth.a.push("+");
console.log(myth.a);
console.log(person.a);

console.log(person);