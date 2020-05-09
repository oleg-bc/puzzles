/*
Given arr of ints, return indices of the two numbers 
such that they add up to a specific target.

Assume that each input would have exactly one solution, 
and you may NOT use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
accepted runtime beats 27% memory beats 95%
*/
function arrayRemove(arr, value) {
    return arr.filter(function(ele) { return ele != value; });
}

function twoSum(arr, targ) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        arr[i] = NaN;
        var targ2 = targ - temp;
        if (arr.includes(targ2)) {
            result.push(i);
            result.push(arr.indexOf(targ2));
            console.log('result is   ***', result)
            return result;
        }
        arr[i] = temp;
    }
    console.log('result is   ***', result)
    return result;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 3], 6));