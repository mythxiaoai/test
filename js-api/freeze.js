let res = Object.freeze({a:1})
res.a=2;
res.a={b:2};
console.log(res);//{ a: 1 }


let res2 = Object.freeze({a:{a:1}})
res2.a.a=2;
console.log(res2);//{ a: { a: 2 } }

let res3 = Object.freeze([{a:1}])
res3[0].a=2;
console.log(res3);//[ { a: 2 } ]

//结论：Object.freeze 只是"浅冻结"