function stepTime(time: number, secondCb: Function, flishCB: Function) {
  let timefn = () => {
    setTimeout(() => {
      time = time - 1000;
      secondCb();
      if (time > 1000) {
        timefn();
      } else {
        setTimeout(() => {
          secondCb();
          flishCB();
        }, time)
      }
    }, 1000)
  }
  timefn();
}
console.time("A");

stepTime(3800, (time: any) => { console.log(1, time) }, () => {
  console.log("flishCB");
  console.timeEnd("A");
});
