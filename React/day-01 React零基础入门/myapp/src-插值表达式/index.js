import ReactDOM from "react-dom";
// JSX-runtime 17 （新增）：可以直接将 JSX 编译为虚拟DOM
/*
JSX 的插值表达式，可以在JSX中放入一个 JS 的表达式
表达式指的是一个可以产生值的代码组合，例如运算式、变量、函数调用

内容中插值表达式，可以接收的值：
基本类型：
  - string、number 原样输出
  - null、undefined、boolean、symbol 会被忽略
复合类型：
  - 数组：将数组展开，依次输入
  - ReactNode：基于 React 的虚拟 DOM
*/

let data = "hello react";
let span = <span>span</span>
let div = <div>{2+2}</div>;
ReactDOM.render(
    div,
    document.querySelector("#root")
)