//allSettled
Promise.allSettled([Promise.reject({ code: 500, msg: "服务异常" }), Promise.resolve({ code: 200, list: [] }), Promise.resolve({ code: 200, list: [] })])
  .then((res) => {
    // 如果其中一个任务是 reject，则不会执行到这个回调。
    console.log(res);
  })
  .catch((error) => {
    // 本例中会执行到这个回调
    // error: {code: 500, msg: "服务异常"}
  });

/*
[
  { status: 'rejected', reason: { code: 500, msg: '服务异常' } },
  { status: 'fulfilled', value: { code: 200, list: [] } },
  { status: 'fulfilled', value: { code: 200, list: [] } }
]
*/

//可选链  Optional chaining    空值合并运算符只有当null和undefined时才会生效

var user = {};
//var name = user && user.info && user.info.name;
var name = user?.info?.name ?? "没有值~";
var age = user?.info?.getAge?.();
//console.log(name);

// var level = null?? "暂无";//暂无
//var level = undefined?? "暂无";//暂无
//var level = ""?? "暂无"; //""
//var level = 0?? "暂无";//0
//var level = false?? "暂无";//false
var level = []?? "暂无";//[]
console.log(level);
// level -> '0级'
