//https://www.interviewcake.com/question/javascript/merge-sorted-arrays?course=fc1&section=array-and-string-manipulation



function mergeArrays(myArray, alicesArray) {

    const mergedArray = [];
    let currIndexAlices = 0;
    let currIndexMine = 0;
    let currIndexMerged = 0;
    while (currIndexMerged < (myArray.length + alicesArray.length)) {
        const isMyArrDone = currIndexMine >= myArray.length;
        const isAlicesArrDone = currIndexAlices >= alicesArray.length;

        if (!isMyArrDone && (isAlicesArrDone ||
                (myArray[currIndexMine] < alicesArray[currIndexAlices]))) {
            mergedArray[currIndexMerged] = myArray[currIndexMine];
            currIndexMine++;

        } else {
            mergedArray[currIndexMerged] = alicesArray[currIndexAlices];
            currIndexAlices++;
        }
        currIndexMerged++;
    }
    return mergedArray;
}


















// Tests

let desc = 'both arrays are empty';
let actual = mergeArrays([], []);
let expected = [];
assertDeepEqual(actual, expected, desc);

desc = 'first array is empty';
actual = mergeArrays([], [1, 2, 3]);
expected = [1, 2, 3];
assertDeepEqual(actual, expected, desc);

desc = 'second array is empty';
actual = mergeArrays([5, 6, 7], []);
expected = [5, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = 'both arrays have some numbers';
actual = mergeArrays([2, 4, 6], [1, 3, 7]);
expected = [1, 2, 3, 4, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = 'arrays are different lengths';
actual = mergeArrays([2, 4, 6, 8], [1, 7]);
expected = [1, 2, 4, 6, 7, 8];
assertDeepEqual(actual, expected, desc);

function assertDeepEqual(a, b, desc) {
    const aStr = JSON.stringify(a);
    const bStr = JSON.stringify(b);
    if (aStr !== bStr) {
        console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
    } else {
        console.log(`${desc} ... PASS`);
    }
}