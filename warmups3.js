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
console.log(maxConsecutiveSum([8, -1, 3, -4, 5, -25, 5])); /// going thru this number by number it makes sense how the choice works