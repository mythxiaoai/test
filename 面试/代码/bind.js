Function.prototype.bind = function(ctx= window){
  let self = this;
  let arg = Array.prototype.slice.call(arguments,1);
  return function () {
    let currParam = Array.from(arguments);
    let finalParams = arg.concat(currParam);
    self.apply(ctx,finalParams);
  }
};

function a(m, n, o) {
  console.log(this.name + ' ' + m + ' ' + n + ' ' + o);
}

var b = {
  name: 'kong'
};

a.bind(b, 7, 8)(9); // kong 7 8 9

