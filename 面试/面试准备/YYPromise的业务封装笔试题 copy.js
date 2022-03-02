function say() {
  let num = 666;
  function demo() {
    console.log(num);
  }
  var demo2 = ()=> {
    console.log(num);
  }
  num++;
  return demo2;
}

var demo = say();
demo();


//闭包内创建了num的对信息和值
//运行的方法，是在num++执行后的时间点所以是667
