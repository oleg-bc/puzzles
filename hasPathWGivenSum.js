//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }


function hasPathWithGivenSum(t, s) {
    var unvisited = []
    if (!t && s != 0) {
        return false
    } else if (!t && s == 0) {
        return true
    }
    unvisited.push(t);
    while (unvisited.length) {
        root = unvisited.shift()
        if (root.left) {
            root.left.value = root.value + root.left.value;
            unvisited.push(root.left)
        } else {
            console.log(root.value)
            if (root.value == s && (root != t || root.right == null)) {
                console.log(root.value)
                return true;
            }
        }
        if (root.right) {
            root.right.value = root.value + root.right.value;
            unvisited.push(root.right)
        } else {
            if (root.value == s && root != t) {
                return true;
            }
        }

    }
    return false

}

/*
function hasPathWithGivenSum(t, s) {
let z=0;
let zr=0;
let zl=0
let sum = s;
let ans = false;
if(t==null)return false;
if(t==s && t.left==null && t.right==null)return true;

function calculateSum(node,temp){  
    let sum, sumLeft, sumRight;  
    sum = sumRight = sumLeft = 0;   
    if(root == null) {  
        console.log("Tree is empty");  
        return 0;  
    }  
    else {  
        if(temp.left != null)  
            sumLeft = calculateSum(temp.left);  
        if(temp.right != null)  
              sumRight = calculateSum(temp.right);  
        sum = temp.data + sumLeft + sumRight;   
        return sum;  
  }      
}  
let temp=Tree;
console.log("THIS",calculateSum(t,temp))
console.log("z",z,"t.LEFT",t.left,"t.RIGHT",t.right)

return ans;
}


*/

/*
function traverse(node) {
    sum=sumRight=SumLeft=0;
    if(node==null){return null;}
    else if (node.left != null){
        sumLeft=traverse(node.left)
    }
    else if (node.right != null){
        sumRight=traverse(node.right);
    }
    sum=node + sumLeft + sumRight;
    return sum;
  
}*/

/*
function helper(arg)
{if(arg.left==null)return arg.value;
  else
      {return helper(arg.value+arg.left);}

}

let leftnum=helper(t);
console.log("LEFTNUM",leftnum)
*/


// if(t.value<s){

//     while (sum >= 0 && (t.right !== null && t.left !== null)){
//         sum=sum-t.right;
//         if (sum==0 && t.right==null && t.left==null)return true;
//     }
//     while (sum >= 0 && (t.right !== null && t.left !== null)){
//         sum=sum-t.left;
//         if (sum==0 && t.left==null && t.right==null)return true;
//     }
//     if (sum<0)return false;
//     if (sum==0 && ((right.value !== null) || (left.value !==null)))return false;
// }
// return ans;
// }