/*
Each order is represented by an "order id" (an integer).

We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

For example:

  const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
*/


//MY SOLUTION 1 -- works only for the obvious case not for edge cases
// function mergeArrays(first,second){
// let third = [];
// for (let i=0,j=0;i<first.length,j<second.length;i++,j++){
// if (first[i]<=second[j]){
//    third.push(first[i]);
//     first[i]='x'
//     third.push(second[j]);
//     second[j]='x';
    
// }else{third.push(second[j]);
//         second[j]='x';
//         third.push(first[i]);
//         first[i]='x';
        
//     }
// }

//     return third;
// }

////the provided answer

function mergeArrays(myArray, alicesArray) {

    // Set up our mergedArray
    const mergedArray = [];
  
    let currentIndexAlices = 0;
    let currentIndexMine = 0;
    let currentIndexMerged = 0;
  
    while (currentIndexMerged < (myArray.length + alicesArray.length)) {
  
      const isMyArrayExhausted = currentIndexMine >= myArray.length;
      const isAlicesArrayExhausted = currentIndexAlices >= alicesArray.length;
  
      // Case: next comes from my array
      // My array must not be exhausted, and EITHER:
      // 1) Alice's array IS exhausted, or
      // 2) The current element in my array is less
      //    than the current element in Alice's array
      if (!isMyArrayExhausted && (isAlicesArrayExhausted ||
        (myArray[currentIndexMine] < alicesArray[currentIndexAlices]))) {
  
        mergedArray[currentIndexMerged] = myArray[currentIndexMine];
        currentIndexMine++;
  
        // Case: next comes from Alice's array
      } else {
        mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices];
        currentIndexAlices++;
      }
  
      currentIndexMerged++;
    }
  
    return mergedArray;
  }


// const myArray =     [3, 4, 6, 10, 11, 15];
// const alicesArray = [1, 5, 8, 12, 14, 19];

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [16,17,19];

console.log(mergeArrays(myArray,alicesArray));