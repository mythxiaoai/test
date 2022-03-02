function sum(a, b) {
    return a + b;
}

function average(a, b) {
    const aver = sum(a, b) / 2;
    return aver;
}

const num = average(3, 5);
console.log(num);

/**
//调用栈执行步骤
push    average()
push    sum()
shift    sum()
shift    average()
push    console.log()
shift    console.log()

*/