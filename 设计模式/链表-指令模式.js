//用链表实现指令模式有个性能问题就是redo和undo删除最后一个要找，应该优化成逆向链表更合适，或者用栈实现
class Node {
  constructor(node,next=null) {
      this.value = node;
      this.next = next;
  }
}


class LinkList {
  constructor() {
      this.length = 0;
      //元素第一个
      this.head = null;
  }
  append(node) {
      if (!this.head) {
          this.head = node;
      } else {
          let cur = this.head;
          while (cur.next) {
              cur = cur.next
          }
          cur.next = node;
      }
      this.length += 1;
      return this.length;
  }
  remove(index){
    const dummyHead = new Node(0,this.head);
    let temp = dummyHead;
    let i =-1;
    while (temp !== null && i<=index) {
        if ((i+1)=== index) {
          let del =  temp.next;
            temp.next = temp.next?.next || null;
            this.head = dummyHead.next;
            --this.length
            return del;
        } else {
            temp = temp.next;
        }
        ++i;
    }
    return false;
  }
  get(index){
    let i = 0;
    let cur = this.head;
    while (i<=index) {
        if(i===index){
          return cur;
        }
        cur = cur.next;
        ++i;
    }
    return null;
  }
  print(mark) {
      let arr = [];
      let cur = this.head;
      while (cur) {
        mark?arr.push(cur.value):arr.push(cur)
          cur = cur.next;
      }
     return arr;
  }
  
}


//用两个链表实现指令模式
class Comm{
  //用作记录
  arr = [];
  //重复
  reLink = new LinkList();
  //返回
  unLink = new LinkList();
  constructor(){
  }
  redo(){
    let curr = this.reLink.get( this.reLink.length -1 );
    if(!curr)return false;
    this.unLink.append(curr);
    return this.reLink.remove( this.reLink.length -1 ).value;
  };
  undo(){
    let curr = this.unLink.get( this.unLink.length -1 );
    if(!curr)return false;
    this.reLink.append(curr);
    return this.unLink.remove( this.unLink.length -1 ).value;
  };
  execute(number){
    if(this.unLink.length===0){
      this.unLink.append(new Node(number,null));
    }else{
      this.unLink.append(new Node(number,null));
      //避免 ->3 ->4 -<4 ->5 依旧能够前进到4
      if(this.reLink.length!==0){
        //假惺惺的维护下arr
        for(let i = 0;i<this.reLink.length;i++){
          this.arr.pop();
        }
        this.reLink =  new LinkList(); 
      }
    }
    this.arr.push(number);
    return number;
  }
  clear(){
    //重复
    this.reLink = new LinkList();
    //返回
    this.unLink = new LinkList();
    this.arr = [];
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
console.log("reLink",com.reLink.print(1));
console.log("unLink",com.unLink.print(1));

