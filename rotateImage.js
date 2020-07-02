/*function rotateImage(a) {
let ht = a.length-1;
let half = Math.floor(ht/2);
for (let i=0;i<half;i++){
    let last = ht-i;
    for(let e=i;e<last;e++){
        var temp = [i][e];
        a[i][e]       = a[ht-e][i];
        a[ht-e][i]    = a[ht-i][ht-e];
        a[ht-i][ht-e] = a[e][ht-i];
        a[e][ht-i]    = temp;
    
    }

}

console.log('a',a);
}
*/

function rotateImage(a) {
    var n = a.length - 1;

    for (var i = 0; i < n / 2; i++) {
        var last = n - i;
        for (var j = i; j < last; j++) {
            var temp = a[i][j];
            a[i][j] = a[n - j][i];
            a[n - j][i] = a[n - i][n - j];
            a[n - i][n - j] = a[j][n - i];
            a[j][n - i] = temp;

        }
    }
    return a;
}

var a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

var b = [
    ['1', '2', '3', '4'],
    ['5', '6', '7', '8'],
    ['9', '10', '11', '12'],
    ['13', '14', '15', '16']
];

rotateImage(b)

/*

Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

Example

For

a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
the output should be

rotateImage(a) =
    [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]
Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer a

Guaranteed constraints:
1 ≤ a.length ≤ 100,
a[i].length = a.length,
1 ≤ a[i][j] ≤ 104.

[output] array.array.integer

[JavaScript (ES6)] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}


*/
/