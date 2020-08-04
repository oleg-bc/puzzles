/*
Daily Coding Problem: Problem #90 [Medium]

This question was asked by Google.

Given an integer n and a list of integers l, write a function that 
randomly generates a number from 0 to n-1 that isn't in l (uniform).
*/
function retRand(num, list) {

    let retVal;
    retVal = Math.floor(10 * (Math.random()));


    if (list.includes(retVal)) {
        retRand(num, list);

    }

    return retVal;

}


let l = [1, 2, 3, 4, 5]
let n = 8;
console.log(retRand(n, l));