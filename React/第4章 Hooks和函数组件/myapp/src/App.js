import { useCallback, useEffect, useMemo, useState } from "react";
/*
    自定义 hook
    1. 一般解决与状态相关的逻辑复用问题
    2. 自定义 hook 就是一个普通函数，但该函数必须以 use 开始命名    
*/
function useNub(init){
    const [nub,setNub] = useState(init);
    const plusNub = useCallback(()=>{
        setNub(nub+1);
    },[nub]);
    const miusNub = useCallback(()=>{
        setNub(nub-1);
    },[nub]); 
    return [nub,plusNub,miusNub];
}

function useScrollY(){
    const [Y,setY] = useState(0);
    const setScrollY = useCallback(()=>{
        setY(window.scrollY);
    },[])
    useEffect(()=>{
        setScrollY();
        window.addEventListener("scroll",setScrollY);
        return ()=>{
            window.removeEventListener("scroll",setScrollY);
        }
    },[]);
    return [Y,(newY)=>{
        window.scrollTo(window.scrollX,newY);
        setY(newY);
    }];
}
export default () => {
    const [count,plusCount,miusCount] = useNub(1);
    const [nub,plusNub,miusNub] = useNub(1);
    const [val,setVal] = useState("");
    const maxVal = useMemo(()=>{
        return nub>count?"nub":"count";
    },[nub,count]);
    const changeVal = useCallback(({target})=>{
        setVal(target.value);
    },[val]);
    const [scrollY,setScrollY] = useScrollY();
    return <div>
        <style>
            {`
                #wrap div {
                    width: 200px;
                    height: 200px; 
                    border: 2px solid #000;
                    font-size: 40px;   
                }
                .info {
                    position: fixed;
                    left: 0;
                    top: calc(50% - 20px);
                    width: 100px;
                    font: 20px/40px "宋体";
                    height: 40px;
                    background: red;
                    color: #fff;
                    text-align: center;
                }
            `}
        </style>
        <p>count:<button onClick={plusCount}>+</button> {count} <button onClick={miusCount}>-</button></p>
        <p>nub:<button onClick={plusNub}>+</button> {nub} <button onClick={miusNub}>-</button></p> 
        <p>当前比较大的是:{maxVal}</p>
        <input type="text" value={val} onChange={changeVal} />   
        <p>{val}</p>
        <span className="info" onClick={()=>{
            setScrollY(0);
        }}>{scrollY}</span>
        <div id="wrap">
            {[...(".".repeat(30))].map((item,index)=><div key={index}>这是第{index}个div</div>)}   
        </div>
    </div>
};
