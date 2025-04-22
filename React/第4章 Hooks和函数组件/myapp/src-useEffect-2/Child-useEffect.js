import { useEffect, useState } from "react";
/*
1. 挂载完成之后，做某事
2. 更新完成之后，做某事
3. 更新完成和挂载完成之后，做某事
4. 即将卸载做某件事
*/
function Child(){
    const [count,setCount] = useState(0);
    const [val,setValue] = useState("kkb");
    useEffect(()=>{
        console.log("挂载完成之后，做某事");
        return ()=>{
            console.log("即将卸载做某件事");    
        }
    },[]);
    useEffect(()=>{
        console.log("更新完成和挂载完成之后，做某事");
    })
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