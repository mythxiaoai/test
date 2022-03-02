function ajax(str, time) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove(str + "返回结果成功");
    }, time || 1000);
  });
}

export { ajax };

//webpack解析后返回  证明promise纯粹只是依靠polyfill库实现 "./node_modules/core-js/modules/es6.promise.js":
Object.defineProperty(exports, "__esModule", { value: true });
function ajax(str, time) {
  return new Promise(function (reslove, reject) {
    setTimeout(function () {
      reslove(str + "返回结果成功");
    }, time || 1000);
  });
}
exports.ajax = ajax; //# sourceURL=webpack:///./promiseS.js?"
