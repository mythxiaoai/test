//表示方法
let arr: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]

//数组的方法也会带有定义时的类型限制
//Argument of type 'string' is not assignable to parameter of type 'number'
// arr.push("8")

//数组泛型
let arr3: Array<number> = [1, 2, 3]

//用接口表示数组
interface NumberArray {
    [index: number]: number;
}
let arr4: NumberArray = [1, 2, 3]

console.log(arr3);

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

//any在数组中的应用
let anyArr: any[] = [{ a: 1 }, 1];
