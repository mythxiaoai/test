let sum = (x, y) => x + y;
console.time("运行时间")
for (let index = 0; index < 999999999; index++) {
    index%2==0?sum(1,2):sum(1,2);
}
console.timeEnd("运行时间")