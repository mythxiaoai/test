import ReactDOM from "react-dom";
/*
  条件输出：
    三目运算
    或运算
    且运算
    函数调用
*/
/*
  列表输出：
    将数据映射出新数组，将数组插入结构
    在列表输出时，要记得每一项需要有一个列表中唯一的key值
*/
let data = [
  "列表项-1",
  "列表项-2",
  "列表项-3",
  "列表项-4"
];
// let lis = [
//   <li>列表项-1</li>,
//   <li>列表项-2</li>,
//   <li>列表项-3</li>,
//   <li>列表项-4</li>
// ]
let list = <ul>
  {data.map((index,item)=>{
    return <li key={index}>{item}</li>
  })}
</ul>;
ReactDOM.render(
    list,
    document.querySelector("#root")
)