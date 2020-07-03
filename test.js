function checkDups(arr) {
    arr = arr.filter(e => e != ".");
    console.log("ARR WITH NO DOTS ", arr);
    return new Set(arr).size !== arr.length
}

// function checkDups(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log('BEFORE', arr[i]);
//         let temp = arr[i];
//         arr[i] = "X" + i;
//         console.log('AFTER', arr[i]);
//         if (temp !== "." && (temp in arr)) {
//             console.log("YES DUPLICATE")
//             return;
//         }

//     };
//     console.log("NOOOOOO DUPLICATE")
//     console.log('arr is   *** ', arr);
// }
let testArr = [".", ".", ".", 1, 2, 3, 1, 45, 6];

console.log(checkDups(testArr));


//////all the solutions so far

/////HELPERS
// function to get subsquares TAKES GRID X-OUTER LOOP Y-INNER LOOP
function getSquare(grid, x, y) {
    x *= 3;
    y *= 3;
    let square = [];
    for (let i = x; i < x + 3; i++) {
        for (let j = y; j < y + 3; j++) {
            square.push(grid[i][j]);
        }
    }
    return square;
}


//function to check for duplicates in an array
function checkDups(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== ".") {
            arr2.push(arr[i])
        }
    }
    //console.log("ARR WITH NO DOTS ", arr);
    return new Set(arr2).size !== arr2.length
}

//function converts columns to array of rows
function colToArr(arrg) {
    let i, j, t = [];
    let h = arrg[0].length;
    let w = arrg.length;
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
//////the algo
function sudoku2(grid) {
    let colsTocheck = colToArr(grid);
    //check rows
    for (let e of grid) {
        if (checkDups(grid[e])) {
            console.log("FAILED ON ONE OF THE ROW ARRS");
            return false;
        }
    }
    //check columns
    for (let i of colsTocheck) {
        if (checkDups(colsTocheck[i])) {
            console.log("FAILED ON ONE OF THE COLUMN ARRS");
            return false;
        }
    }
    // check squares

    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            let squareRows = getSquare(grid, x, y);
            for (let i of squareRows) {
                if (checkDups(squareRows[i])) return false;
            }
            let squareCols = colToArr(squareRows);
            for (let e = 0; e < squareCols.length; e++) {
                if (checkDups(squareCols[e])) return false;
            }
        }
    }



    return true;
}