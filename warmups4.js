//House Rober return max $

function houseRobber(nums) {
    if (nums.length == 1) { return [0]; }
    if (nums.length == 0) { return 0; }
    let sorter = [];

    sorter[0] = nums[0]; /// sorter gets the 1st element from input
    sorter[1] = Math.max(nums[1], nums[0]); /// the 2nd element in sorter is a bigger of 1st and 2nd elems of input

    for (let i = 2; i < nums.length; i++) {
        let A = sorter[0]; // A is the 0th element of sorter
        let B = sorter[1]; // B is 1st
        current = nums[i]; // current is element at position 3 in input
        sorter[0] = B; // replace sorter at 0th position with B --- the 1st element AND THE BIGGER element
        sorter[1] = Math.max(A + current, B); /// REPLACE 1st position element of sorter with the bigger of POSITION ONE OR 2
    }
    return sorter[1];
}


let robTest1 = [1, 2, 3, 1];
let robTest2 = [2, 7, 9, 3, 1]

console.log(houseRobber(robTest1));
console.log(houseRobber(robTest2));


///DYNAMIC PROG MOVING WINDOW BIT FLIP
/// a true moving window algo takes a while to grok
/// we're closing the window only when we get to e

function bitFlip(arr, n) {
    let max = 0,
        start = 0,
        end = 0;
    while (end < arr.length) {
        if (arr[end] === 0) {
            console.log('arr[end] is now > ', arr[end], '   n is   ', n);
            n--;
            console.log('n got decr-ed n is now       >', n);
        }
        end++;
        while (n < 0) {
            if (arr[start] === 0) { n++; }
            start++;
        }
        max = Math.max(max, end - start);
    }
    return max;
}

// console.log(bitFlip([0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], 2));
// console.log(bitFlip([0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], 2));

function mult(ar1, ar2) {
    let carry = 0;
    let prod = 0;
    let arrToAdd = [];
    let elemToAdd = 0;
    for (let i = 0; i < ar1.length; i++) {
        for (let j = 0; j < ar2.length; j++) {
            prod = ar2[j] * ar1[i];
            //if prod == 81
            if (prod > 9) {
                carry = Math.floor(prod % 10);

                elemToAdd = prod % 10;
            }

        }
    }
}