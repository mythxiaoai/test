
//如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型：
/**函数合并   重载 */
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}


/**接口自动的合并 */
interface Alarm {
    price: number;
}
interface Alarm {
    weight: number;
    // price: string;  // 类型不一致，会报错
}


