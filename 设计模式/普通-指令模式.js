//用两个链表实现指令模式
class Comm{
  //用作记录
  arr = [];
  //重复
  reLink = [];
  //返回
  unLink =[];
  constructor(){
  }
  redo(){
    let curr = this.reLink[this.reLink.length -1];
    if(!curr)return false;
    this.unLink.push(curr);
    return this.reLink.pop();
  };
  undo(){
    let curr = this.unLink[this.unLink.length -1];
    if(curr===undefined)return false;
    this.reLink.push(curr);
    return this.unLink.pop();
  };
  execute(val){
    if(this.unLink.length===0){
      this.unLink.push(val);
    }else{
      this.unLink.push(val);
      //避免 ->3 ->4 -<4 ->5 依旧能够前进到4
      if(this.reLink.length!==0){
        //假惺惺的维护下arr
        for(let i = 0;i<this.reLink.length;i++){
          this.arr.pop();
        }
        this.reLink.length = 0; 
      }
    }
    this.arr.push(val);
    return val;
  }
  clear(){
    this.reLink.length = 0;
    this.unLink.length = 0;
    this.arr.length = 0;
  }
}


let com = new Comm();
// com.execute(1)
// com.execute(3)
// com.execute(5)
// console.log(com.undo());
// console.log(com.undo());
// console.log(com.undo());
// console.log(com.undo());
// console.log(com.redo());
// console.log(com.redo());
// console.log(com.redo());
// console.log(com.redo());
// console.log(com.arr);

com.execute(1)
com.execute(3)
com.execute(5)
console.log(com.undo());
console.log(com.undo());

com.execute(7)
com.execute(9)
console.log(com.arr);
console.log("reLink",com.reLink);
console.log("unLink",com.unLink);
console.log(com.undo());
console.log(com.undo());
console.log(com.undo());
console.log(com.undo());
console.log(com.redo());
console.log(com.redo());
console.log(com.redo());
console.log(com.redo());
