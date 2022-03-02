let map = new Map();
let fruit = {};
let cook = function () { };

map.set(fruit, "AA")
map.set(cook, "BB")
console.log(map);//Map(2) { {} => 'AA', [Function: cook] => 'BB' }

console.log(map.get(fruit));//AA
map.delete(fruit);
map.clear()