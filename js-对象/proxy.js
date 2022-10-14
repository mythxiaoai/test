let locationProxy = (() => {
  //处理报错  防止  api.a()运行报错
  return new Proxy(window, {
    get(targt, key) {
     console.log(key);
    }
  });
})()