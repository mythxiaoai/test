const render = $ => {
  window.c =3333;
  // $("#test-container").innerHTML = 'Hello, render with jQuery';
  return Promise.resolve();
};
(global => {
  global['test'] = {
    bootstrap: () => {
      console.log('test bootstrap');
      return Promise.resolve();
    },
    mount: () => {
      global.b =2222222222;
      global.d =()=>{};
      console.log('test mount',global);
      return render($);
    },
    unmount: () => {
      console.log('test unmount');
      return Promise.resolve();
    },
  };
})(window);


function $(src){
  return document.querySelector(src)
}
