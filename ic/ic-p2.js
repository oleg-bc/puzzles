function reverseChars(arr) {

    if (arr.length < 2) { return arr; }
    let half = Math.floor(arr / 2)
    for (let i = arr.length - 1, j = 0; i !== j; i--, j++) {
        //[arr[0], arr[1]] = [arr[1], arr[0]];
        [arr[j], arr[i]] = [arr[i], arr[j]]
    }
    return arr;
}

var inp1 = ['h', 'e', 'l', 'l ', 'o '];

console.log(reverseChars(inp1));



/*the answer solution:

function reverse(arrayOfChars) {

  let leftIndex = 0;
  let rightIndex = arrayOfChars.length - 1;

  while (leftIndex < rightIndex) {

    // Swap characters
    const temp = arrayOfChars[leftIndex];
    arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
    arrayOfChars[rightIndex] = temp;

    // Move towards middle
    leftIndex++;
    rightIndex--;
  }
}



*/