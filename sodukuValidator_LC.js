/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    ///function that makes an empty array of objects
    const arrayOfObjects = size => Array(size).fill(null).map(() => ({}));
    //function that makes 
    const nestedArrayOfObjects = size => Array(size).fill(null).map(() => arrayOfObjects(size));

    const rows = arrayOfObjects(board.length);
    const cols = arrayOfObjects(board.length);
    const subs = nestedArrayOfObjects(3);
    console.log("ROWS", rows, "COLS", cols, "SUBS", subs)
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cellValue = board[row][col];

            if (cellValue !== ".") {
                const subsRow = Math.floor(row / 3);
                const subsCol = Math.floor(col / 3);

                rows[row][cellValue] = (rows[row][cellValue] || 0) + 1;
                cols[col][cellValue] = (cols[col][cellValue] || 0) + 1;
                subs[subsRow][subsCol][cellValue] = (subs[subsRow][subsCol][cellValue] || 0) + 1;
                const rowDup = rows[row][cellValue] > 1;
                const colDup = cols[col][cellValue] > 1;
                const subDup = subs[subsRow][subsCol][cellValue] > 1;
                console.log("rowDup", rowDup, "COLSdup", colDup, "SUBdup", subDup);

                if (rowDup || colDup || subDup) { return false };

            }
        }
    }
    console.log("ROWS", rows, "COLS", cols, "SUBS", subs)
    return true;
};


let board = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

isValidSudoku(board);