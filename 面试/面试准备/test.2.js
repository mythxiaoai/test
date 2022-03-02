setTimeout(function(){
  console.log(2);
},0);
new Promise(function(resolve){
  console.log(3);
  resolve();
  console.log(4);
}).then(function(){
  console.log(5);
});
console.log(6);
console.log(8);
//3 4 6 8 5 2