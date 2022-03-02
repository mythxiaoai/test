let dataArr = [
  { id: 2, name: "i2", parentId: 1 },
  { id: 4, name: "i4", parentId: 3 },
  { id: 3, name: "i3", parentId: 2 },
  { id: 8, name: "i8", parentId: 3 },
  { id: 1, name: "i1" },
];

//   let json = {};

//  function convert(list) {
//   const res = []
//   const map = list.reduce((res, v) => (res[v.id] = v, res), {});
//   for (const item of list) {
//       if (!item.parentId) {
//           res.push(item)
//           continue
//       }
//       if (item.parentId in map) {
//         //在map中找出父
//           const parent = map[item.parentId]
//           //添加子
//           parent.children = parent.children || []
//           parent.children.push(item)
//       }
//   }
//   return res
// }
console.log(JSON.stringify(convert(dataArr), null, 4));



function convert(list) {
  let res = [];
  let map = list.reduce((acc, val) => (acc[val.id] = val, acc), {});
  for (const item of list) {
    if (!item.parentId) {
      res.push(item);
      continue;
    }
    if (item.parentId in map) {
      let parent = map[item.parentId];
      parent.children = parent.children || []
      parent.children.push(item);
    }
  }
  return res;
}