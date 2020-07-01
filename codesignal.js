function firstDuplicate(a) {
    let c = [];
    //let dupIndexes = [];
    let smallestDupIndex = -1;
    let noDups = true;
    for (let i = 0; i < a.length; i++) {
        let temp = a[i];
        c.push(temp);
        a[i] = NaN;
        if (a.includes(temp)) {
            noDups = false;
            let dupInd = a.indexOf(temp);
            //dupIndexes.push(dupInd);
            //dupIndexes.push(a.indexOf(temp));
            if (smallestDupIndex === -1 || smallestDupIndex > dupInd) {
                smallestDupIndex = dupInd;
            }
        }
    }
    if (noDups) { return -1; }
    //let position = Math.min(...dupIndexes);
    //return c[position];
    return c[smallestDupIndex];
}

let b = [2, 1, 3, 5, 3, 2];
firstDuplicate(b);

/*Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

Example

For a = [2, 1, 3, 5, 3, 2], the output should be firstDuplicate(a) = 3.

There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.

For a = [2, 2], the output should be firstDuplicate(a) = 2;

For a = [2, 4, 3, 5, 1], the output should be firstDuplicate(a) = -1.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

Guaranteed constraints:
1 ≤ a.length ≤ 105,
1 ≤ a[i] ≤ a.length.

[output] integer

The element in a that occurs in the array more than once and has the minimal index for its second occurrence. If there are no such elements, return -1.
[JavaScript (ES6)] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}*/



/*
function firstDuplicate(a) {
let smallestDupIndex=-1;
let noDups=true;
for (let i=0;i<a.length;i++){
    let temp=a[i];
    a[i]=a[i]*-1;
    if(a.includes(temp)){
        noDups=false;
        let dupInd = a.indexOf(temp);
        if(smallestDupIndex=== -1 || smallestDupIndex > dupInd) {
            smallestDupIndex=dupInd;
            }
       }
}
if(noDups){return -1;}
return Math.abs(a[smallestDupIndex]);
}
*/




/*found solution

function firstDuplicate(a) {
  for (let i of a) {
    let abVal = Math.abs(i) - 1
    if (a[abVal] < 0) return abVal + 1
    a[abVal] = a[abVal] * -1
  }  return -1;
}

 */