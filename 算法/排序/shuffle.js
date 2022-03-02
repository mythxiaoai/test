let arr = [3, 2, 1, 6, 7];

function shuffle(a) {

    for (let i = 0; i < arr.length; i++) {
        let j = Math.floor(Math.random() * arr.length);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
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
console.log(arr);