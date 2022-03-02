"use strict"
function fn(num){
    if(num<=1){
        return 1;
    }else{
        console.log(arguments.callee);
        return num * arguments.callee(num - 1);
    }

}

console.log(fn(4));

// var otherFn = fn;
// fn =null;
// console.log(otherFn);
// console.log(otherFn(4));

// function fntest(){
//     console.log(arguments);
// }

// fntest()

