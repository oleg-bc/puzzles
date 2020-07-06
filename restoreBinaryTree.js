var inp = [1, 2, 4, 3, 5, 6];
var inorder = [];

function Tree(x) {
    this.value = x;
    this.left = null;
    this.right = null;
}

function restoreBinaryTree(inorder, preorder) {
    let root = new Tree();
    let p = new Tree();
    let q = new Tree();

    root.value = preorder[0];
    p.value = preorder[0];

    for (let i = 1; i < preorder.length; i++) {
        q.value = preorder[i];
        if (i == 1) {
            if (q.value <= p.value) {
                if (p.left == null) {
                    p.left = q;
                    continue;
                } else { p = p.left }
            } else if (q.value > p.value) {
                if (p.right = null) {
                    p.right = q;
                    continue;
                } else { p = p.right; }
            }
        }
    }
    console.log(p);
    return (p);
}
restoreBinaryTree(inorder, inp);