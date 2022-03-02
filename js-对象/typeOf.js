class P{
    constructor() {
        console.log(this);
        // Object.prototype.toString.call(this);
        console.log(Object.prototype.toString.call(this));
    }
 
}


let p = new P();
console.log(Object.prototype.toString.call(p));
