import { useEffect, useState } from "react";
/*
    useEffect 副作用钩子
    useEffect(()=>{
        // effect 函数
        return ()=>{
            // cleanup 函数
        }
    },[依赖参数]);
    用于在 React 函数中，来处理副作用，类似于类组件中的生命周期函数
    副作用：数据请求，DOM 操作

挂载阶段：
从上向下一行行执行代码，如果碰到 useEffect 则将对应的 effect 函数，存储到一个队列中，当组件挂载完成之后，按添加顺序执行 effect 队列，获取 cleanup 函数，将 cleanup 函数存入一个队列

更新阶段：
从上向下一行行执行代码，如果碰到 useEffect 则将对应的 effect 函数，存储到一个队列中，当组件更新完成之后，找到 cleanup 队列，依次执行。按添加顺序执行 effect 队列，获取 cleanup 函数，将 cleanup 函数存入一个队列。在执行具体的 effect 函数或 cleanup 函数时，会观察，该 useEffect 对应的依赖数据，是否有产生变化，如果产生变化，则执行，否则不执行

卸载阶段：
找到对应的 cleanup 队列，依次执行

依赖参数：
1. 不写依赖参数 useEffect(()=>{}) , 组件有更新，就会执行其 cleanup 函数 和 effect 函数
2. 有具体依赖参数(1-多个) useEffect(()=>{},[a[,……]])，则组件更新时，其依赖参数有变化，会执行其 cleanup 函数 和 effect 函数
3. 有具体依赖参数(0个) useEffect(()=>{},[])，则组件更新时，不会执行其 cleanup 和 effect 

*/

function Child(){
    const [count,setCount] = useState(0);
    const [val,setValue] = useState("kkb");
    useEffect(()=>{
        console.log("effect-1");
        return ()=>{
            console.log("cleanup-1");
        }
    },[count]);
    useEffect(()=>{
        console.log("effect-2");
        return ()=>{
            console.log("cleanup-2");
        }
    },[val]);
    useEffect(()=>{
        console.log("effect-3");
        return ()=>{
            console.log("cleanup-3");
        }
    },[val,count]);
    useEffect(()=>{
        console.log("effect-4");
        return ()=>{
            console.log("cleanup-4");
        }
    });
    useEffect(()=>{
        console.log("effect-5");
        return ()=>{
            console.log("cleanup-5");
        }
    },[]);
    return <div>
        <p>count:{count}</p>
        <button onClick={()=>{
            setCount(count + 1);
        }}>递增</button>
        <br/>
        <input 
            type="text"
            value={val}
            onChange={({target})=>{
                setValue(target.value);
            }}
        />
        <input 
            type="text"
            value={val}
            onChange={({target})=>{
                setValue(target.value);
            }}
        />
        <input 
            type="text"
            value={val}
            onChange={({target})=>{
                setValue(target.value);
            }}
        />
    </div>
}
export default Child;