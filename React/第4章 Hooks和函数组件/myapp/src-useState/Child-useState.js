import {useState} from "react";
/*
    useState 
    1. 同一个组件可以通过 useState 声明状态，并且可以多次调用useState，声明多个状态
    2. useState 的 setState 方法，同样会受到批处理影响，多次多用 setState 会被合并只执行一次更新
    3. useState 的 setState 方法，只有一个参数，该参数，代表的时，该状态更新完之后，的新状态
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