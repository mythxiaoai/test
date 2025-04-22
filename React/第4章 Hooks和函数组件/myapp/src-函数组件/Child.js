function Child({count,addCount}){
    //console.log(props);
    console.log("render");
    return <div>
        <p>count:{count}</p>
        <button onClick={addCount}>递增</button>
    </div>
}
export default Child;