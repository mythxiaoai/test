import ReactDOM from "react-dom";
// let list = <ul>
//   {/* {data.map((index,item)=>{
//     return <li key={index}>{item}</li>
//   })} */}
// </ul>;
let inner = '<p>这是一个p标签</p>';
let view = <div 
  className="wrap"
  style = {{
    width: "200px",
    height: "200px",
    background: "red"
  }}
>
  <input type="text" autoComplete="off" />
  <div
    dangerouslySetInnerHTML={{
      __html:inner
    }}
  ></div>
</div>
ReactDOM.render(
    view,
    document.querySelector("#root")
)