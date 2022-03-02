/**
 * 请实现一个队列处理程序，当传入任务队列时，能够串行地处理完任务，
 * 如果传入的任务包含异步执行，那么必须确保异步执行完毕之后才会执行后面的任务。
 *
 *
 **/

function queue(list, count) {
  let i = 0;
  let len = list.length;
  run(0);
  let promising = false;
  function run(i) {
    if (i >= len) return;
    let countArr = [];
    for (let start = 0; start < count; start++) {
      let fn = list[start+i];
      fn && countArr.push(Promise.resolve(()=>{

          fn()
      }));
    }

    promising = Promise.all(countArr);
   
    
  }
}

function task1(next) {
  setTimeout(function () {
    console.log(1);
    next();
  }, 1000);
}

function task2(next) {
  console.log(2);
  next();
}

function task3(next) {
  setTimeout(function () {
    console.log(3);
    next();
  }, 200);
}
function task4(next) {
  setTimeout(function () {
    console.log(4);
    next();
  }, 200);
}
function task5(next) {
  setTimeout(function () {
    console.log(5);
    next();
  }, 200);
}

queue([task1, task2, task3,task4,task5], 2);

// 按顺序输出 2,3,1
