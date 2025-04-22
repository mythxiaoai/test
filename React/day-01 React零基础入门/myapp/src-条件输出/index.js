import ReactDOM from "react-dom";
/*
  条件输出：
    三目运算
    或运算
    且运算
    函数调用
*/
let render = (nub)=>{
    if(nub < 5){
      return "小于5"
    }
    if(nub < 10){
      return "小于10"
    }
    if(nub < 20){
      return "小于20"
    }
    return "大于等于20";
}
let a = 10;
let b = 20;
let div = <div>
    <p>{(a < b)&&"成立"}</p>
    <p>{(a > b)||"不成立"}</p>
    <p>{(a > b)?"成立":"不成立"}</p>
    <p>{render(3)}</p>
</div>;
ReactDOM.render(
    div,
    document.querySelector("#root")
)