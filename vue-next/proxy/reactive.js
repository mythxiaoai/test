
//原始--》响应式对象  weakMap是个特殊的对象，key是object
let toProxy = new WeakMap();
//响应式--》原始
let toRaw  =new WeakMap();


let obj = {name:"kkb"};
//收集
function track(){

}
//触发
function trigger(){

}

//响应式代理
const baseHandle = {
    get(target,key){
        //手机依赖
        const res = Reflect.get(target,key);

        return typeof res =="object"?reactive(res):res;
    },
    set(target,key,val){
        const res = Reflect.set(target,key,val);
        //触发更新
    }
};
//响应式
function reactive(target){
    let observed = toProxy.get(target);
    if (observed) {
        return observed;
    }
    if(toRaw.get(target)){
        return target;
    }
    
}

function computed(){

}