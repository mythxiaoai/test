//数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象
//元组起源于函数编程语言（如 F#），这些语言中会频繁使用元组。
//可以单独用下标赋值对应类型
let yuan: [string, number] = ['tom', 25];

// yuan = ['myth']//X  需要两个元素
// yuan = ['myth',2,3]//X  多了也不行
// yuan.push(Boolean(1));//X   类型不再联合类型内
yuan.push("A");//在原本基础上添加,定义个数受限，后续添加越界不报错
console.log(yuan);
yuan.pop();
yuan.pop();
console.log(yuan);
