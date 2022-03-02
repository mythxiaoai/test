//接口是行为的抽象

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

//任意属性
interface IPerson2{
    name:string;
    // age?:number;
    [propName:string]: string
}
//一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集,因为任意属性的推断不能保证其他属性不是任意属性。
let myth2:IPerson2 = {
    name:"myth",
    // age:5,
    // say:2
}

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

//只读属性   只能创建的时候赋值,后面更改会报错
//约束  是约束第一次给对象赋值的时候，不是第一次给只读属性赋值的时候

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