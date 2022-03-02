class TreeNode {
    constructor(val = null) {
        this.val = val;
        this.left = this.right = null;
        return this.val
    }

    static arrayOf(arr) {
        if (!Array.isArray(arr)) throw new Error('not array');
        if (arr.length === 0) return new TreeNode()
        arr = arr.map(v => new TreeNode(v))
        let root = arr[0]
        let curr = arr[0];
        let i = 0;
        let next = arr.splice(0, 2 * i + 1);

        while (arr.length) {
            curr = next;
            next = arr.splice(0, 2 * (i + 1));
            TreeNode._mountParent(curr, next);
            i++;
        }
        return root;
    }
    /**
     * 
     * @param {} parentNopdes [TreeNode]
     * @param {*} childs [TreeNode]
     */
    static _mountParent(parentNopdes, childs) {
        let i = 0;
        parentNopdes.forEach(node => {
            node.left = childs[i]?.val && childs[i]
            let next = ++i;
            node.right = childs[next]?.val && childs[next];
            ++i;
        })
    }

    static print(root) {
        function loop(root, res = []) {
            if (!root?.val) return null;
            res.push(root.val);
            loop(root.left, res);
            loop(root.right, res);
            return res;
        }
        console.log(loop(root));
    }
}

// let res = TreeNode.arrayOf([1, 2, 3, 4]);
// let res = TreeNode.arrayOf([3, 9, 20, null, null, 15, 7]);

// TreeNode.print(res);

module.exports = TreeNode;