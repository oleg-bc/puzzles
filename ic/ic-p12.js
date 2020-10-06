function getProductsOfAllIntsExceptAtIndex(intArray) {
if(intArray.length<2){throw new Error("bad input");}
    const returnArray = [];
let prodSoFar = 1
for(let i = 0;i<intArray.length;i++){
    returnArray[i] = prodSoFar;
    prodSoFar *= intArray[i];
}

prodSoFar =1;
for(let j = intArray.length-1;j>=0;j--){
    returnArray[j] *= prodSoFar;
    prodSoFar *= intArray[j];
}

return returnArray;
}
  
  
  let in1 =   [1, 7, 3, 4];

console.log('expecting   [84, 12, 28, 21]   GOT: ' ,getProductsOfAllIntsExceptAtIndex(in1));
  
  


  
  
  
  
  
  
  
  
  
  
  
  
  
  // Tests
  
  let desc = 'short array';
  let actual = getProductsOfAllIntsExceptAtIndex([1, 2, 3]);
  let expected = [6, 3, 2];
  assertArrayEquals(actual, expected, desc);
  
  desc = 'longer array',
  actual = getProductsOfAllIntsExceptAtIndex([8, 2, 4, 3, 1, 5]);
  expected = [120, 480, 240, 320, 960, 192];
  assertArrayEquals(actual, expected, desc);
  
  desc = 'array has one zero',
  actual = getProductsOfAllIntsExceptAtIndex([6, 2, 0, 3]);
  expected = [0, 0, 36, 0];
  assertArrayEquals(actual, expected, desc);
  
  desc = 'array has two zeros';
  actual = getProductsOfAllIntsExceptAtIndex([4, 0, 9, 1, 0]);
  expected = [0, 0, 0, 0, 0];
  assertArrayEquals(actual, expected, desc);
  
  desc = 'one negative number';
  actual = getProductsOfAllIntsExceptAtIndex([-3, 8, 4]);
  expected = [32, -12, -24];
  assertArrayEquals(actual, expected, desc);
  
  desc = 'all negative numbers';
  actual = getProductsOfAllIntsExceptAtIndex([-7, -1, -4, -2]);
  expected = [-8, -56, -14, -28];
  assertArrayEquals(actual, expected, desc);
  
  desc = 'error with empty array';
  const emptyArray = () => (getProductsOfAllIntsExceptAtIndex([]));
  assertThrowsError(emptyArray, desc);
  
  desc = 'error with one number';
  const oneNumber = () => (getProductsOfAllIntsExceptAtIndex([1]));
  assertThrowsError(oneNumber, desc);
  
  function assertArrayEquals(a, b, desc) {
    const arrayA = JSON.stringify(a);
    const arrayB = JSON.stringify(b);
    if (arrayA !== arrayB) {
      console.log(`${desc} ... FAIL: ${arrayA} != ${arrayB}`)
    } else {
      console.log(`${desc} ... PASS`);
    }
  }
  
  function assertThrowsError(func, desc) {
    try {
      func();
      console.log(`${desc} ... FAIL`);
    } catch (e) {
      console.log(`${desc} ... PASS`);
    }
  }