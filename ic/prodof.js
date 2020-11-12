function getProductsOfAllIntsExceptAtIndex(intArray) {
    if (intArray.length < 2) {
        throw new Error('needs at least 2 numbers');
    }
    const prods = [];
    let prodSoFar = 1;
    for (let i = 0; i < intArray.length; i++) {
        prods[i] = prodSoFar; ///first insert prodSoFar INTO results array
        prodSoFar *= intArray[i]; ////then update prodSoFar BY multiplying it with CURRENT INPUT ELEMENT
    }
    console.log('prods after first run', prods)
    prodSoFar = 1;
    for (let j = intArray.length - 1; j >= 0; j--) {
        prods[j] *= prodSoFar; ////STARTING AT THE END  mult prodsSofar by  
        prodSoFar *= intArray[j]; ////prod so far goes into the last results
    }
    console.log('prods after 2nd run', prods)
    return prods;
}

let inArr = [2, 3, 4, 1];
getProductsOfAllIntsExceptAtIndex(inArr);















// // Tests

// let desc = 'short array';
// let actual = getProductsOfAllIntsExceptAtIndex([2, 3, 4, 1]);
// let expected = [12, 8, 6, 24];
// assertArrayEquals(actual, expected, desc);


// desc = 'short array';
// actual = getProductsOfAllIntsExceptAtIndex([1, 2, 3]);
// expected = [6, 3, 2];
// assertArrayEquals(actual, expected, desc);

// desc = 'longer array',
//     actual = getProductsOfAllIntsExceptAtIndex([8, 2, 4, 3, 1, 5]);
// expected = [120, 480, 240, 320, 960, 192];
// assertArrayEquals(actual, expected, desc);

// desc = 'array has one zero',
//     actual = getProductsOfAllIntsExceptAtIndex([6, 2, 0, 3]);
// expected = [0, 0, 36, 0];
// assertArrayEquals(actual, expected, desc);

// desc = 'array has two zeros';
// actual = getProductsOfAllIntsExceptAtIndex([4, 0, 9, 1, 0]);
// expected = [0, 0, 0, 0, 0];
// assertArrayEquals(actual, expected, desc);

// desc = 'one negative number';
// actual = getProductsOfAllIntsExceptAtIndex([-3, 8, 4]);
// expected = [32, -12, -24];
// assertArrayEquals(actual, expected, desc);

// desc = 'all negative numbers';
// actual = getProductsOfAllIntsExceptAtIndex([-7, -1, -4, -2]);
// expected = [-8, -56, -14, -28];
// assertArrayEquals(actual, expected, desc);

// desc = 'error with empty array';
// const emptyArray = () => (getProductsOfAllIntsExceptAtIndex([]));
// assertThrowsError(emptyArray, desc);

// desc = 'error with one number';
// const oneNumber = () => (getProductsOfAllIntsExceptAtIndex([1]));
// assertThrowsError(oneNumber, desc);

// function assertArrayEquals(a, b, desc) {
//     const arrayA = JSON.stringify(a);
//     const arrayB = JSON.stringify(b);
//     if (arrayA !== arrayB) {
//         console.log(`${desc} ... FAIL: ${arrayA} != ${arrayB}`)
//     } else {
//         console.log(`${desc} ... PASS`);
//     }
// }

// function assertThrowsError(func, desc) {
//     try {
//         func();
//         console.log(`${desc} ... FAIL`);
//     } catch (e) {
//         console.log(`${desc} ... PASS`);
//     }
// }

// // let testArr = [2, 3, 4, 1];
// // console.log(prod(testArr));