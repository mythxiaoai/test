// import {Fragment} from "react";
import ReactDOM from "react-dom";
// #### JSX 使用注意事项
//   1. JSX 不是字符串
//   2. JSX 不是 HTML，很多写法和HTML 有区别，另外有强制的大小写规则
//   3. 标签名必须小写，组件名首字母要大写
//   4. 所有的标记必须闭合
//   5. JSX 中属性的写法，不一定和HTML一致
//     1. class ---> className
//     2. 如果属性名由两个或两个以上单词组成，一般从第二个单词开始首字母大写
//     3. 注意 style 的值，不是字符串，而是 对象
//     4. innerHTML属性
//   1. JSX 最终会变成虚拟DOM（一个对象）,一定要注意，JSX 在输出时，必须有且只有一个顶层容器元素。
//     Fragment: <Fragment></Fragment> 或 <></>
let div = <>
  <div>
    <input type="text"></input>
  </div>
  <div></div>
</>;
console.log(div);
ReactDOM.render(
    div,
    document.querySelector("#root")
)