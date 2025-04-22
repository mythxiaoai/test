import { useEffect, useRef, useState } from "react";
/*
const ref = useRef(init);
1. 关联节点实例
2. 传递组件更新前的一些数据，当 useRef 中存贮的是某项数据时，该数据并不会随着组件的更新而自动更新
*/
function Child(){
    const [count,setCount] = useState(0);
    const [val,setValue] = useState("kkb");
    const countEl = useRef();
    const prevCount = useRef(count);
    const prevCountInner = useRef();
    useEffect(()=>{
        //console.log(countEl);
        //console.log(prevCount,count);
        //prevCount.current = count;
        console.log(prevCountInner,countEl.current.innerHTML);
        prevCountInner.current = countEl.current.innerHTML;
    })
    return <div>
        <p ref={countEl}>count:{count}</p>
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