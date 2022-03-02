//不预先指定具体的类型，而在使用的时候再指定类型的一种特性

/*类型占位*/
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']

/*多个类型参数 */
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]
console.log(swap([7, 'seven']));

/*泛型的约束和解法 */

interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);//没有继承会报错
    return arg;
}

/*相互约束 */
function copyFields<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
        // target[id] = (<T>source)[id];
        target[id] = (source as T)[id];
    }
    return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };
copyFields(x, { b: 10, d: 20 });

/*泛型接口 */

// interface SearchFunc {
//     (source: string, subString: string): boolean
// }

// let mySearch: SearchFunc;
// mySearch = function (source: string, subString: string) {
//     return source.search(subString) !== -1;
// }

interface CreateArrayFunc {
    <T>(length: number, value: T): Array<T>;
}

let createArray2: CreateArrayFunc;
createArray2 = function <T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
console.log(createArray2(3, 'x'));//[ 'x', 'x', 'x' ]


/*泛型类 */
// class GenericNumber<T> {
//     zeroValue: T;
//     add: (x: T, y: T) => T;
//     constructor(a:T) {
//         this.zeroValue = a;
//     }
//     add(x: T, y: T):T{
//         return x + y;
//     }
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) { return x + y; };

/** 泛型默认类型 **/
function createArray3<T = string>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

/** 泛型类型 **/

function hello<T>(arg:T):T{
    return arg;
}
var newHello:<K>(arg:K)=>K = hello;
console.log(newHello("aaa"));
var newHello2:{<T>(arg:T):T} =hello;
console.log(newHello2("BBB"));

var newHello3 = hello;
console.log(newHello3("CCC"));

