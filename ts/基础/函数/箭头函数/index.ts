let mySum = function (x: number, y: number): number {
    return x + y;
};
console.log(mySum);

let mySum2: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
console.log(mySum2);