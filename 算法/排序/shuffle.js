let arr = [3, 2, 1, 6, 7];

function shuffle(arr) {

    for (let i = 0; i < arr.length; i++) {
        let j = Math.floor(Math.random() * arr.length);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
}

function isSorted(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i - 1] > a[i]) {
            return false;
        }
    }
    return true;
}

function isSorted(a) {
  for (let i = 0; i < a.length; i++) {
      if (a[i - 1] > a[i]) {
          return false;
      }
  }
  return true;
}

while (!isSorted(arr)) shuffle(arr);
console.log(shuffle(arr));

//
function getRandom(arr,fixIndex){
  let newArr = arr.filter((v,i)=>i!==fixIndex);
  console.log(newArr);
}

getRandom(arr,3)