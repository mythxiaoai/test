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
// let fn2:(x:number,y:number)=>number = function(x:number,y:number): number{return x+ y}
//这里的=>是ts的函数定义
let fn3: (firstValue: number, secondValue: number) => number = function (x: number, y: number): number { return x + y }
//也支持剪头函数
let fn4 = (x: number, y: number): number => x + y

//接口定义函数形状
interface IFn {
    (x: number, y: number): number;
}
let fn5: IFn = (x: number, y: number): number => x + y
//前后的类型要一致
//let fn5:IFn = (x: number, y: number):string=>x+y + ""

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

//重载   123 =>321 ,hello => olleh
let fn9 = (x: string | number): string | number => {
    if (typeof x === 'number') {
        return Number(x.toString().split("").reverse().join(""))
    } else {
        return x.split("").reverse().join("")
    }
}
//其实这种写法也只会优先提示第一个
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split("").reverse().join(""))
    } else {
        return x.split("").reverse().join("")
    }
}
reverse(123)