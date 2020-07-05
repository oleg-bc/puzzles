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
            isIdent(t1.right, t2.right)) return true;
    }
    return false;
}

function isSubtree(t1, t2) {
    if (!t2) return true;
    if (!t1) return false;

    if (isIdent(t1, t2)) return true;

    return (isSubtree(t1.left, t2) || isSubtree(t1.right, t2));

}


let v1 = {
    "value": 5,
    "left": {
        "value": 10,
        "left": {
            "value": 4,
            "left": {
                "value": 1,
                "left": null,
                "right": null
            },
            "right": {
                "value": 2,
                "left": null,
                "right": null
            }
        },
        "right": {
            "value": 6,
            "left": {
                "value": -1,
                "left": null,
                "right": null
            },
            "right": null
        }
    },
    "right": {
        "value": 7,
        "left": null,
        "right": null
    }
}
let v2 = {
    "value": 10,
    "left": {
        "value": 4,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 2,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 6,
        "left": null,
        "right": {
            "value": -1,
            "left": null,
            "right": null
        }
    }
}