let TreeNode = require("./TreeNode.js");

var maxDepth = function (root) {
    if (!root) return 0;
    console.log(root.val);
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};


let root = TreeNode.arrayOf([3, 9, 20, null, null, 15, 7]);
console.log(root);
console.log(maxDepth(root));
