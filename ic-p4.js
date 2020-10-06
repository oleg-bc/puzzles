/*  const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]*/
//MY ANSWER
function mergeArrs(arr1, arr2) {
    let arr3 = [...arr1, ...arr2];
    arr3.sort(function(a, b) { return a - b });
    console.log(arr3);
}


const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

mergeArrs(myArray, alicesArray);