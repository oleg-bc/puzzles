//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

function isTreeSymmetric(t) {
    if (t === null) return true;
    return areNodesSym(t.left, t.right);
}

function areNodesSym(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;

    if (areNodesSym(left.left, right.right) === false) return false;
    if (left.value !== right.value) return false;

    return areNodesSym(left.right, right.left);
}