function clone(target, objItem) {
  let args = Array.prototype.slice.call(arguments);
  if (args.length == 1) return args[0];
  for (let i = 0; i < args.length; i++) {
    for (var key in args[i]) {
      if (args[i].hasOwnProperty(key)) {
        if (typeof args[i][key] == "object") {
          args[0][key] = clone({}, args[i][key]);
        } else {
          args[0][key] = args[i][key];
        }
      }
    }
  }
  return args[0];
}

let a = { a: 1, b: { b: 2 } };

let c = clone({}, a);
c.b.b = 3;
console.log(a, c);
