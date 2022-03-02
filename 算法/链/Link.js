class Node {
    constructor(node) {
        this.value = node;
        this.next = null;
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
        //index
        let i= 0,cur=this.head,
        while(index>=i){
            ++i;
        }
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
linklist.print()

console.log(linklist.length);
console.log(linklist.head);
console.log(linklist.head.next);
console.log(linklist.head.next.next);