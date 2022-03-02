const res = require('./geojson.js');

let result = res.features.map(v=>{
    v.properties.adcode
})
console.log(res);