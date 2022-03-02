
//https://mp.weixin.qq.com/s/nHyDm_JWyuys245PBXpkqQ

//记忆机制
const memo = (fn) => {
    const cache = {};
    return (...arg) => {
        let res = cache[arg[0]] || (cache[arg[0]] = fn(...arg))
        console.log(cache);
        return res
    };
}

// const memo = (fn) => {
//     const cache = {};
//     return (arg) => cache[arg] || (cache[arg] = fn(arg));
// }


// let fastFact = memo(
//     (n) => {
//         if (n<=0){
//             return 1;
//         }else{
//             return n * fastFact(n-1);
//         }
//     }
// );
let test = memo((a,b)=>{
    return {a,b}
});

console.log(test("666","777"));
console.log(test("888","999"));
console.log(test());
