
let arr = "[]"
let arr1 = "[()]"
let arr2 = "[({})]"
let arr3 = "[({)]}"


function viaty(str) {
    if (str % 2) return false;
    let len = str.length;
    let letter = "";
    let result = [];
    for (let i = 0; i < len; i++) {
         letter = result[result.length-1];
        switch (str[i]) {
            case "[":
                result.push(str[i])
                break;
            case "(":
                result.push(str[i])
                break;
            case "{":
                result.push(str[i])
                break;
            case "]":
                letter=="[" && result.pop()
                break;
            case ")":
                letter=="(" &&   result.pop()
                break;
            case "}":
                letter=="{" &&  result.pop()
                break;
            default:
                break;
        }

    }
    return result.length == 0;
}

console.log(viaty(arr));
console.log(viaty(arr1));
console.log(viaty(arr2));
console.log(viaty(arr3));