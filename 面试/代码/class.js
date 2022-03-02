// class P{
//   constructor(){
//     this.a =1;
//   }
//   say(){
//     console.log(1);
//   }
//   c=5;
// }


// let p = new P();
// p.b=2;
// console.log(p);

//1
// function P(){
//   this.a = 1;
// }
// P.prototype.b = 2;

// function S(){
//   P.call(this)
//   this.c = 3;
// }
// S.prototype = P.prototype;
// S.prototype.constructor = S;
// S.prototype.d = 4;

// let s = new S();
// console.log(s);

function P(){
  this.a = 1;
}
P.prototype.b = 2;

function S(){
  P.call(this)
  this.c = 3;
}
S.prototype = new P();
S.prototype.constructor = S;
S.prototype.d = 4;

let s = new S();
console.log(s);

// class P{
//   constructor(){
//     this.a = 1;
//   }
// }
// P.prototype.b=2;

// class S extends P{
//   constructor(){
//     super();
//     this.c =3;
//   }
// }
// S.prototype.d = 4;
// let s = new S();
// console.log(s);