import { Component } from "react";
import Child from "./Child";
/*
函数式组件，本质就是一个常规函数，接收一个参数 props
在函数的 return 定义，该组件要输出的视图 


函数式组件中没有this和生命周期函数

使用函数式组件时，应该尽量减少在函数中声明子函数，否则，组件每次更新时都会重新创建这个函数
*/

// function App() {
//   return (<>
//     <h1>hello React</h1>
//     <Child info={"传递的信息"} />
//   </>);
// }
class App extends Component {
  state = {
    count: 1
  }
  addCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return <div>
      <Child 
        count={this.state.count}
        addCount={this.addCount}
      />
    </div>
  }
}

export default App;
