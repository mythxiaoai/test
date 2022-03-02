Function.prototype.before = function (beforefn) {
  var __self = this;
  return function () {
    //5. 我被得到执行
    beforefn.apply(this, arguments);
    //7. 我被执行
    return __self.apply(this, arguments);
  };
};

Function.prototype.after = function (afterfn) {
  //3. 当前的__self是当前执行环境，是before的返回
  var __self = this;
  return function () {
    //4. 执行调用
    var ret = __self.apply(this, arguments);
    // 10 我被执行
    afterfn.apply(this, arguments);
    //返回结果
    return ret;
  };
};

//8. 真正方法被调用
var func = function () {
  console.log(2);
};

func =
  //6. 我被调用
  func
    .before(function () {
      console.log(1);
    })
    //11. 我被调用
    .after(function () {
      console.log(3);
    });

//1.调用 这里是after返回回来的定义
func();
