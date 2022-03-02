
function Promise(fn) {
  var value = null,
    callbacks = []; //callbacks为数组，因为可能同时有很多个回调
  this.then = function(onFulfilled) {
    callbacks.push(onFulfilled);
    return this;
  };
  function resolve(value) {
    callbacks.forEach(function(callback) {
      callback(value);
    });
  }
  fn(resolve);
}

function ajax(str, time) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove(str + "返回结果成功");
    }, time || 1000);
  });
}

ajax("ajax", 3000)
  .then(v => {
    console.log(v);
  })
  .then(v => {
    console.log(v);
  })
  .then(v => {
    console.log(v);
  });
