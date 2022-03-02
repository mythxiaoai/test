# 学习参考来源
http://ts.xcatliu.com/basics/union-types.html

# 基础
## 原始数据类型
包括：Boolean,Number,String,Null,Undefined,Symbol,ES10: BigInt
### 布尔值

```ts
//good
let isDone : boolean =false;
let createdByNewBoolean: boolean = Boolean(1);

//bad
// let createdByNewBoolean2: boolean = new Boolean(1);
//new Boolean构造函数Boolean创建的对象不是Boolean,返回的是对象，其他类型也一样

console.log(createdByNewBoolean);
```

### Number
```ts
let decLiteral: number = 6;
//十六进制  x  hexadecimal
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法  b  binary
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法  octonary
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
```

### String
```ts
//String
let myName: string = 'Tom';
let myAge: number = 25;
    //模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;
```

### void
```ts
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
```

## 任意值
```ts
//any
//声明任意值之后，对它的任何操作，返回值的类型也是任意值  运行时才回报错
let any:any = "5";
any.setValue("6")
any.setName("6").sayhello()

//变量没指定类型，那么他会被识别为任意类型
let any2;  //== let any2:any
any2 = "string"
any2 = 5;
any2.setName("666")
```

## 类型推论

```ts
let myFavoriteNumber = 'seven';//=let myFavoriteNumber:string = 'seven'
//Type 'number' is not assignable to type 'string'.
myFavoriteNumber = 7;
```

## 联合类型
取值可以为多种类型中的一种
```ts
let myType:string | number ;
myType = "five"
myType = 5
//ts不确定联合类型的变量是两个的时候，会才去悲观判断，访问此联合类型的所有类型里共有的属性或者方法
//类型“number”上不存在属性“length”会报错
myType.length
//没问题
myType.toString()


myType = "five"//被推断成String类型
//没问题  因为在赋值的时候，会根据类型推导的规则推断出一个类型
myType.length

```

## 接口
接口是行为的抽象，具体的行为需要class去实现(implement)
- 不能少属性，也不允许多属性，需要跟接口类型保持一致
```ts
interface IPerson{
    name:string;
    age?:number;
}

//接口的实现不允许少,也不运行多  ?可选属性
let myth:IPerson = {
    name:"myth",
    // age:5,
    // say:"hellow"
}
```

- 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集,因为任意属性的推断不能保证其他属性不是任意属性。
```ts
//一个接口只能定义一个任意属性，可以拓展多个实现
interface IPerson3{
    name:string;
    age?:number;
    //任意类型需要满足上面的所有类型
    [propName:string]: string | number | undefined;
}

let myth3:IPerson3 = {
    name:"myth",
    age:5,
    say:"a",
    sayb:"b"
}

```

- 只读属性   只能创建的时候赋值,后面更改会报错
- 约束  是约束第一次给对象赋值的时候，不是第一次给只读属性赋值的时候
```ts
interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

tom.id = 9527;
```

## 数组类型
- 表示方法
```ts
let arr: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]

//数组的方法也会带有定义时的类型限制
//Argument of type 'string' is not assignable to parameter of type 'number'
// arr.push("8")
```
**数组泛型**

```ts
let fibonacci: Array<T> = [1, 1, 2, 3, 5];
```

**用接口表示数组**

```ts
interface NumberArray {
    [index: number]: number;
}
let arr4: NumberArray = [1, 2, 3]

console.log(arr3);
```

**类数组结构的arguments***
```ts
// 类数组  arguments   有内置的IArguments接口,其它内置接口有：IArguments, NodeList, HTMLCollection
interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}
function testFn(a:number,b:number,c:number): void {
    let arg: IArguments = arguments;
    console.log(arg);
}
testFn(1,2,3)//[Arguments] { '0': 1, '1': 2, '2': 3 }

```
**any在数组中的应用**
```ts
//any在数组中的应用
let anyArr: any[] = [{ a: 1 }, 1];
```

## 函数
**定义**
```ts
/**函数声明式和表达式**/
//声明式
function fn(x: number, y: number): number {
    return x + y
}
//表达式
let fn2 = function (x: number, y: number): number {
    return x + y
}
//实际上fn2并没有实际的类型编译的结果是
let fn3:(x:number,y:number)=>number = function(x:number,y:number): number{return x+ y}

```
**接口定义函数的形状**
- 保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变
```ts
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}
```

**剩余参数**
```ts
//可选参数  要放在必选参数后面,因为参数的位置需要固定，不然影响运行时代码逻辑
let fn6 = (x: number, y?: number): number => {
    if (y) return x + y;
    return x
}
fn6(6)

//参数默认值
let fn7 = (x: number, y: number = 2): number => x + y
fn7(5)

//剩余参数  剩余参数不能为不可选
let fn8 = (x: number, y: number = 2, ...args: any[]): number => x + y + Math.max(...args)
console.log(fn8(5, 5, 3, 9))
```
### 重载
- 前几次都是函数定义，最后一次是函数实现

```ts
//重载   123 =>321 ,hello => olleh
let fn9 = (x: string | number): string | number => {
    if (typeof x === 'number') {
        return Number(x.toString().split("").reverse().join(""))
    } else {
        return x.split("").reverse().join("")
    }
}
//其实这种写法也只会优先提示第一个
//前几次都是函数定义，最后一次是函数实现
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split("").reverse().join(""))
    } else {
        return x.split("").reverse().join("")
    }
}
let res = reverse(123)
console.log(typeof res);//number
```

