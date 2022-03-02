let c = 5;
(function(){
  for (let i =0;i<=999999999;i++) {
    if(i==999999999){
      console.log("c.js执行完成")
      document.body.style.background = "blue"
    }
  }
})()
