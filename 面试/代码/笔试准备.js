//拖拽
//排序
//深度克隆
//继承的几种方式   寄生组合继承
//时间切片
//promise
//promise 取消
//promise 并发数限制
//promise.all race 
//bind
//call
//防抖
//节流
//树结构渲染
//发布订阅
//性能  LCP  FID 怎么算的
//compose






function mix(target, datajson) {
  var args = Array.prototype.slice.call(arguments);
  if (args.length == 1) return args[0];
  var i = 1;
  while (args[i]) {
    //这里做为判断条件 取不到就返回false
    var temp = args[i];
    for (var j in temp) {
      if (temp.hasOwnProperty(j)) {
        if (typeof temp[j] == "object") {
          target[j] = mix({}, temp[j]);
        } else {
          target[j] = temp[j];
        }
      }
    }
    i++;
  }
  return target;
}
