/* Thursday 5/7/2020
Given a list of numbers and a number k, 
return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, 
return true since 10 + 7 is 17.ls

Bonus: Can you do this in one pass? */

function canSum(arr,target){
    for (var i=0;i<arr.length;i++){
        var newTarget = target-arr[i];
        arr.shift();
        if(arr.includes(newTarget)){return true;}
        arr.unshift(arr[i])
    }

    return false;
};

console.log(canSum([10, 15, 3, 7],17));
console.log(canSum([10, 15, 3, 7],19));