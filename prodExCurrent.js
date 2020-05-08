/*
Given arr of ints, return a new arr such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
IN: [1, 2, 3, 4, 5], OUT: [120, 60, 40, 30, 24]. AND IN: [3, 2, 1], OUT: [2, 3, 6].  Follow-up: what if you can't use division?
*/
function arrayRemove(arr, value) {
     return arr.filter(function(ele){ return ele != value; });} 
function multArr(arr){
    if (arr.length == 0) return 0;
    var result = 1;
    for (let i=0; i<arr.length;i++){
        if(arr[i] == 0){return 0;}
        result = arr[i] * result;
    }
    return result
}
function retProds(arr){
    let solved=[];
    for(let i = 0; i<arr.length; i++){
        var removed = arr[i];
        var l = arr[i];
        var left = arrayRemove(arr, l);
        var res=0;
        res = multArr(left); // reruns the loop every iteration N^2
        solved.push(res)
    }
    console.log('SOLVED IS    ***********     ',solved);
    return solved;
}

//with division
function retProdsAlt(arr){  // This solution is N time complexity 2 passes
    let solved=[];
    var newProd=multArr(arr);
    for(let i=0;i<arr.length;i++){
        solved.push(newProd/arr[i]);
    }
    console.log('NEW  SOLVED IS    ***********     ',solved);
    return solved;
}

retProds([3, 2, 1]);
retProds([1, 2, 3, 4, 5]);

retProdsAlt([3, 2, 1]);
retProdsAlt([1, 2, 3, 4, 5]);
