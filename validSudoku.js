function colToArr(arrg) {
    var i, j, t = [];
    var h = arrg[0].length;
    var w = arrg.length;
    // Loop through every item in the outer array (height)
    for (i = 0; i < h; i++) {
        // Insert a new row (array)
        t[i] = [];
        // Loop through every item per item in outer array (width)
        for (j = 0; j < w; j++) {
            // Save transposed data.
            t[i][j] = arrg[j][i];
        }
    }
    console.log(t);
    return t;
}


let test = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
colToArr(test);

/*function sudoku2(grid) {
let height = grid.length;
let width = grid[0].length;

//check rows
let countHash = {};
for (let i = 0; i < height; i++) {
    let row = "row" + i;
    for (let j = 0; j < width; j++) {
        let col = "col" + j;
        if (grid[i][j] != ".") {
            countHash[grid[i][j]] = (countHash[grid[i][j]] || 0) + 1;
        }
    }
}

for (let [key, value] of Object.entries(countHash)) {
    console.log(`${key}:  ${value}`);
}

//check cols
//check 3x3
}

*/