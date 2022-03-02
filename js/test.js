let a = `[
    {
      "required": true,
      "message": "不能为空~",
      "trigger": "blur"
    }
  ]`
let b = `{
    "required": true,
    "message": "不能为空~",
    "trigger": "blur"
  }`

  //console.log(a.replace(/\s/g,"").indexOf(b.replace(/\s/g,"")));


let s = "function(text,record,index){return`${text}岁`}"

s = `(function(){
  return ${s}
})()`;
// s = eval(s);
// console.log(s());

// eval(`(function(){return (function(text, record, index){ return 666; })}()`)

(function(){return function(text, record, index){
  return 666;
}})()