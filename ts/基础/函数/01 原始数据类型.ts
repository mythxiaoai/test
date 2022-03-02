
//原始数据类型包括：Boolean,Number,String,Null,Undefined,Symbol,ES10: BigInt

//Boolean
let isDone : boolean =false;
let createdByNewBoolean: boolean = Boolean(1);
// Type 'Boolean' is not assignable to type 'boolean'.
//   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
//new Boolean构造函数Boolean创建的对象不是Boolean,返回的是对象，其他类型也一样
// let createdByNewBoolean2: boolean = new Boolean(1);

console.log(createdByNewBoolean);


//Number
let decLiteral: number = 6;
//十六进制  x  hexadecimal
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法  b  binary
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法  octonary
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;


//String
let myName: string = 'Tom';
let myAge: number = 25;
    //模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;


//空值void  返回
function alertName():void{
    alert("My name is Tom")
}
//声明void变量只能赋值  undefined和null
let voidlet: void = null;


//Null 和 Undefined  跟void的区别是他们是所有类型的**子类型**
let u: undefined = undefined;
let n: null = null;
//正常编译  以下在严格模式下都会报错
let nulllet: null;
let undefineder: undefined;
let voidlet: void;

let num: number = nulllet;
let num2: number = undefineder;
num = voidlet

