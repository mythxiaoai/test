let data = require("./data/city.json");
let yunana = data.filter(v => v.province == "云南省");
let result = yunana.map(v => {
      v.boundariesX = [];
      
      v.boundaries.map(b => {
            let temp = b.split(";");
            let x = temp.map(v => v.split(",")[0]);
            let y = temp.map(v => v.split(",")[1]);

            v.boundariesX.push({
                  xmin: Math.min(...x),
                  xmax: Math.max(...x),
                  ymin: Math.min(...y),
                  ymax: Math.max(...y)
            })
      })
      return v
});

console.log(JSON.stringify(result,null,2));



