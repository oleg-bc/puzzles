//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

function isIdent(t1, t2) {
    if (t1 === null && t2 === null) return true;
    if (t1 !== null && t2 !== null) {
        if (t1.value === t2.value &&
            isIdent(t1.left, t2.left) &&
            isIdent(t2.right, t2.right)) return true;
    }
    return false;
}

function isSubtree(t1, t2) {
    if (!t2) return true;
    if (!t1) return false;

    if (isIdent(t1, t2)) return true;

    return (isSubtree(t1.left, t2) || isSubtree(t1.right, t2));

}