class A{
    constructor(){
        this.a = 1;
    }
    b(){
        return "b"
    }
}

class B extends A{
    constructor(arg){
        super()
        this.c = arg;
    }
    d(){
        return "d";
    }
}

A.prototype.a = 2;
let b = new B(666);
console.log(b);//B { a: 1, c: 666 }
//说明 es6的class用的是寄生继承，通过super关键字实现父的自有变量赋值。
//组合寄生继承的特点  1.子会Person.call(this) 2. 父的prototype赋值给子的 3. 父的Person等于子的prototype.constructor

/**
B
a: 1
c: 666
__proto__: A
constructor: class B
d: ƒ d()
__proto__:
a: 2
b: ƒ b()
constructor: class A
__proto__: Object
 * 
 * 
 * 
 */