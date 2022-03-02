   //模拟ajax
     function ajax(str,time){
       return new Promise((reslove,reject)=>{
         setTimeout(()=>{
           reslove(str+"返回结果成功");
         },time||1000);
       })
     }
     
     (async function(){
       let a = await ajax("a");
       let b = await ajax("b");
       let c = await ajax("c");
       console.log(a,b,c)
     })()
     
     
     //实践
     let list ={
       async init(){
         let p =  await this.pre();
         console.log(p)
         let n =  await this.next();
         console.log(n)
       },
       pre(){
         return ajax("pre",2000);
       },
       next(){
         return ajax("next");
       }
     }
    // list.init();
     
      