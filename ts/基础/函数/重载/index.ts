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
