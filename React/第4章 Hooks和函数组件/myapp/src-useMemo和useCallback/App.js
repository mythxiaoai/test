import { useCallback, useMemo, useState } from "react";
/*
    const data = useMemo(cb,[]);
    当 useMemo 返回值是一个函数时，可以使用 useCallback 做简化
*/
export default () => {
    const [count,setCount] = useState(1);
    const [nub,setNub] = useState(1);
    const [val,setVal] = useState("");
    const maxVal = useMemo(()=>{
        return nub>count?"nub":"count";
    },[nub,count]);
    const plusCount = useCallback(()=>{
        setCount(count + 1);
    },[count]);
    const miusCount = useCallback(()=>{
        setCount(count-1);
    },[count]);
    const plusNub = useCallback(()=>{
        setNub(nub+1);
    },[nub]);
    const miusNub = useCallback(()=>{
        setNub(nub-1);
    },[nub]); 
    const changeVal = useCallback(({target})=>{
        setVal(target.value);
    },[val]);
    return <div>
        <p>count:<button onClick={plusCount}>+</button> {count} <button onClick={miusCount}>-</button></p>
        <p>nub:<button onClick={plusNub}>+</button> {nub} <button onClick={miusNub}>-</button></p> 
        <p>当前比较大的是:{maxVal}</p>
        <input type="text" value={val} onChange={changeVal} />   
        <p>{val}</p>
    </div>
};
