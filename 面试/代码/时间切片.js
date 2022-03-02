
ts(function*(){
    for(var i=0;i<10000;i++){
        console.log(1); // 执行了50毫秒
        yield;
        console.log(2); // 执行了50毫秒
    }
})


function ts(fn){
    if(typeof fn !== "function")return;
    let gen = fn();
    if(!(gen&& typeof gen.next =="function")) return;
    let next = function (){
        let now = performance.now();
        let res = null;
        do {
            res = gen.next();
        }while( !res.done || performance.now() - now<25)
        setTimeout(next);
    }
    next();
}

//因为setTimeout可以释放主线程，让主线程可以分段执行，配合gennerate使用可以控制执行的分段保证分段的合理性。
