import { useState } from "react";
import Child from "./Child";

function App() {
  const [show,setShow] = useState(true);
  return (<>
    {show?<Child />:""}
    <button onClick={()=>{setShow(!show)}}>显示隐藏</button>
  </>);
}

export default App;
