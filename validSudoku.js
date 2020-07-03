function sudoku2(grid) {
    // convert cols to rows  -- takes ARR OF ARRS
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

    // get squares first
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

    function checkDups(arr) {
        arr = arr.filter(e => e != ".");
        //console.log("ARR WITH NO DOTS ", arr);
        return new Set(arr).size !== arr.length
    }

    for (let i = 0; i < grid.length; i++) {
        if (checkDups(grid[i])) return false;
    }
    ///part 2
    let columnsToCheck = colToArr(grid);
    for (let i = 0; i < columnsToCheck.length; i++) {
        if (checkDups(columnsToCheck[i])) return false;
    }
    ////part 2 ends

    /// part 3
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            if (checkDups(getSquare(grid, x, y))) return false
        }
    }
    /// part 3 ends
    return true;
}

var truGrid = [
    [".", ".", ".", "1", "4", ".", ".", "2", "."],
    [".", ".", "6", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "1", ".", ".", ".", ".", ".", "."],
    [".", "6", "7", ".", ".", ".", ".", ".", "9"],
    [".", ".", ".", ".", ".", ".", "8", "1", "."],
    [".", "3", ".", ".", ".", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", "7", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", "7", "."]
];

var falseGrid = [
    [".", ".", ".", ".", "2", ".", ".", "9", "."],
    [".", ".", ".", ".", "6", ".", ".", ".", "."],
    ["7", "1", ".", ".", "7", "5", ".", ".", "."],
    [".", "7", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "8", "3", ".", ".", "."],
    [".", ".", "8", ".", ".", "7", ".", "6", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "1", ".", "2", ".", ".", ".", ".", "."],
    [".", "2", ".", ".", "3", ".", ".", ".", "."]
];