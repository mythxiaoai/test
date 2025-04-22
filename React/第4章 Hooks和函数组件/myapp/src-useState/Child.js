import { useState } from "react";
/*
    useState 
    1. 同一个组件可以通过 useState 声明状态，并且可以多次调用useState，声明多个状态
    2. useState 的 setState 方法，同样会受到批处理影响，多次多用 setState 会被合并只执行一次更新
    3. useState 的 setState 方法，只有一个参数，该参数，代表的时，该状态更新完之后的新状态(不会在进行状态的浅合并)
*/
/*
- 只在 React 函数中调用 Hook
  - React 函数组件中
  - React 自定义 Hook 中
- 只在最顶层使用 Hook：在 React 中要保证 hook 的执行顺序，组件前和更新后 hook 的执行顺序要保持一致
*/
function Child(){
    const [count,setCount] = useState(0);
    const [val,setValue] = useState("kkb");  
    console.log("render");
    return <div>
        <p>count:{count}</p>
        <button onClick={()=>{
            setCount(count + 1);
            setValue(count + "value");
            console.log("set");
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