self.onmessage = function (event) {
  let data = event.data;
  console.log(this.a);
  data.sort();

  for (let i = 0; i <= 9999; i++) {
    console.log(i);
  }
  self.postMessage(data);
};
