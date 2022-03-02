let arr = [2,1,63,18,3];

//冒泡

// for (let i = 0,len = arr.length; i < len-1; i++) {
//     for (let j = i+1; j < len; j++) {
//         if(arr[i]>arr[j]){
//             arr[i] = arr[i]+arr[j];
//             arr[j] = arr[i]-arr[j];
//             arr[i] = arr[i]-arr[j];
//         }
//     }
// }
// console.log(arr);


//选择

for (let i = 0,len = arr.length; i < len; i++) {
    for (let j = 0; j < len-i; j++) {
        if(arr[j]>arr[j+1]){
            arr[j+1] = arr[j]+arr[j+1];
            arr[j] = arr[j+1]-arr[j];
            arr[j+1] = arr[j+1]-arr[j];
        }
    }
    console.log("i"+i ,arr);
}
console.log(arr);