function getBoundariesByArray(arr) {
  let res = [];
  return new Promise((resolve, reject) => {
    arr.map(v => {
      setTimeout(() => {
        if (v.value) {
          resolve(v.value);
        }else{
            res.push(false);
        }
        if(res.length==arr.length){
            resolve([]);
        }
      }, v.time);
      // bdary.get(name, function(rs) {
      //   if (rs.boundaries.length > 0){
      //     resolve(rs.boundaries);
      //   }
      // });
    });
    
  });
}

(async () => {
  let res = await getBoundariesByArray([
    { value: false, time: 2000 },
    { value: false, time: 1000 },
    { value: false, time: 2300 }
  ]);
  console.log(res);
})();
