// function P(){
//     console.log(new.target)
// }


// let p = new P();//[Function：P]
// P()//undefined

function P() {
    console.log(this.constructor); 
}

let res = new P(); // 1
P() 
