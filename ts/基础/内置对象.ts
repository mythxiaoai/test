//ECMAScript 的内置对象  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

let b:boolean = Boolean(1);
console.log(b);

//DOM和BOM的内置对象
//Document HTMLElement Event NodeList
let body:HTMLElement = document.body
body.addEventListener("click",(e:Event)=>{
    console.log(e);
})


//TypeScript 核心库的定义中不包含 Node.js 部分。 想用需安装 npm install @types/node --save-dev














