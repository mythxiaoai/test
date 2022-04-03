

function isEqueal(arr1,arr2) {
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
          return false;
      }
  }
  return true;
}


function shuffle(arr) {
  if(arr.length===2){
    [arr[1], arr[0]] = [arr[0], arr[1]];
    return arr;
  }
    for (let i = 0; i < arr.length; i++) {
        let j = Math.floor(Math.random() * arr.length);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
}

function getRandom(arr,fixIndex){
  if(arr.length<=2)return arr;
  let newArr = arr.filter((v,i)=>i!==fixIndex);
  let randomArr = shuffle([...newArr]);
  while (isEqueal(randomArr,newArr)){
    randomArr = shuffle([...newArr]);
  }
  randomArr.splice(fixIndex,0,arr[fixIndex]);
  return randomArr;
}
let arr = [3, 2, 5, 1];
console.log(getRandom(arr,3));//[ 2, 3, 5, 1 ]

