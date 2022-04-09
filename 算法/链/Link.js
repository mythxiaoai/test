
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
    print() {
        let arr = [];
        let cur = this.head;
        while (cur) {
            arr.push(cur)
            cur = cur.next;
        }
        console.log(arr);
    }
    
}

let linklist = new LinkList();

linklist.append(new Node("小艾"))
linklist.append(new Node("真帅"))
linklist.append(new Node("666"))
linklist.remove(1)
// console.log(linklist.get(3));
console.log(linklist.head);