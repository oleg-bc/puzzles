function maxConsecutiveSum(arr) {
    let local = arr[0];
    console.log('AT FIRST LOCAL IS       >', local);
    let ultimate = arr[0];
    console.log('AT FIRST UlTIMATE IS    >', ultimate);

    for (let i = 1; i < arr.length; i++) { ////THE KEY TO THIS ALGO IS STARTING AT ONE
        local = Math.max(local + arr[i], arr[i]);
        console.log('local is      ', local);
        ultimate = Math.max(local, ultimate);
        console.log('ultimate is   ', ultimate);
    }
    return ultimate ? ultimate : 0;
}
//console.log(maxConsecutiveSum([8, -1, 3, -4, 5, -25, 5])); /// going thru this number by number it makes sense how the choice works

function latticePaths(m, n) {


    let cache = {};

    function traverse(m, n) {

        let key = m + "_" + n;

        if (key in cache) { return cache[key]; }
        if (m < 0 || n < 0) { return 0; }
        if (m === 0 && n === 0) { return 1; }

        cache[key] = traverse(m - 1, n) + traverse(m, n - 1);
        return cache[key];
    }
    return traverse(m, n);
}

console.log(latticePaths(3, 2));
console.log(latticePaths(7, 3));

function latticePaths2(m, n) {

    let table = new Array(n + 1).fill(1);
    for (let i = 0; i < m; i++) {

        for (let j = 1; j < table.length; j++) {
            table[j] = table[j] + table[j - 1];
        }
    }
    return table[n];
}

console.log(latticePaths2(3, 2));
console.log(latticePaths2(7, 3));



///steps to climb tabulation
function numStepsToClimb(steps, total) {
    let T = [];
    T.push(1);
    for (let stair = 1; stair <= total; stair++) {
        T.push(0);
        steps.forEach(function(step) {

            if (step <= stair) {
                T[stair] += T[stair - step];
            }
        })
    }
    return T[total];
}

console.log("STEPS TO CLIMB", numStepsToClimb([2, 3], 9));