console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
},0)
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
},0)
//node 11版本前 下 1 7 6 8 2 4 9 11 3 10 5 12  宏任务执行完后，会把当前队列中所有的微任务先执行，在执行下一轮宏任务  process.nextTick > Promise 
//js  或11版本之后 1 7 6 8 2 4 3 5 9 11 10 12  会把当前宏任务中的微任务优先执行，也就是局部宏任务中的微任务全部执行完，才执行下一个宏任务