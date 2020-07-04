//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function kthSmallestInBST(t, k) {
    let stored = [];
    let vals = (node) => {
        if (node) {
            stored.push(node.value);
            vals(node.left);
            vals(node.right);
        }
    }
    vals(t);
    return stored.sort((a, b) => a - b)[k - 1];

}