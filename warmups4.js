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

console.log(bitFlip([0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], 2));