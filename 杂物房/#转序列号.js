
function change(arr) {
    let pre = "0"; //序号从0开始
    let preMarkNum = 1; //上一个#的数量
    return arr.map((v, i) => {
        let markNum = v.match(/#/g).length;
        let val = v.match(/\w/g)[0];
        pre = pre.split(".");
        
        if (markNum > preMarkNum) {
            pre.push(1);
        }
        if (markNum == preMarkNum) {
            pre[preMarkNum - 1] = pre[preMarkNum - 1] * 1 + 1;
        }
        
        if (markNum < preMarkNum) {
            pre.length = markNum;
            pre[pre.length-1] = pre[pre.length-1] * 1 + 1;
        }

       
        pre = pre.join(".");
        preMarkNum = markNum;

        return {
            hc: pre,
            title: val,
        };
    });
}
const arr = ["# a", "## b", "## c", "### d", "# e"];
const arr2 = ["# a", "## b", "## c", "### d","## g", "# e","# f"];
//console.log(change(arr));
console.log(change(arr2));
