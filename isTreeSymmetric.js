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
/*
complete solution:


/*
Given a binary tree t, determine whether it is symmetric around its center, i.e. each side mirrors the other.
Example
For
t = {
    "value": 1,
    "left": {
        "value": 2,
        "left": {
            "value": 3,
            "left": null,
            "right": null
        },
        "right": {
            "value": 4,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 2,
        "left": {
            "value": 4,
            "left": null,
            "right": null
        },
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    }
}
the output should be isTreeSymmetric(t) = true.
Here's what the tree in this example looks like:
    1
   / \
  2   2
 / \ / \
3  4 4  3
As you can see, it is symmetric.
For
t = {
    "value": 1,
    "left": {
        "value": 2,
        "left": null,
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 2,
        "left": null,
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    }
}
the output should be isTreeSymmetric(t) = false.
Here's what the tree in this example looks like:
    1
   / \
  2   2
   \   \
   3    3
As you can see, it is not symmetric.
https://codefights.com/interview-practice/task/tXN6wQsTknDT6bNrf/description
*/

// Definition for binary tree:
function Tree(x, left, right) {
    this.value = x;
    this.left = left ? left : null;
    this.right = right ? right : null;
}

function isTreeSymmetric(t) {
    if (t === null) return true;
    return areTreesMirror(t.left, t.right);
}

function areTreesMirror(t1, t2) {
    if (!t1 && !t2) return true;
    if (!t1 || !t2) return false;
    if (t1.value !== t2.value) return false;
    if (areTreesMirror(t1.left, t2.right) === false) return false;
    return areTreesMirror(t1.right, t2.left);
}
//Option 2

function isTreeSymmetric(t) {
    if (!t) return true;
    return check(t.left, t.right);
}

function check(t1, t2) {
    if (t1 == null && t2 == null) {
        return true;
    }
    if (t1 == null || t2 == null || t1.value != t2.value) {
        return false;
    }
    return check(t1.left, t2.right) &&
        check(t1.right, t2.left);
}

var tree = new Tree(1, new Tree(2, new Tree(3), new Tree(4)), new Tree(2, new Tree(4), new Tree(3)));
console.log(isTreeSymmetric(tree));

*
/