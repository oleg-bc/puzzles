// The function to check for a valid shape is all constant time and space O(1)
const hasValidShape = board => {
    // We have an empty board, it is automatically invalid
    if (board.length === 0 || board[0].length === 0) {
        return false;
    }

    const rowCount = board.length;
    const columnCount = board[0].length;
    const isSquare = rowCount === columnCount;

    // The board is not a square, so we know it is invalid
    if (!isSquare) {
        return false;
    }

    // For a board to be composed of sub-squares,
    // the square root of `k` must be a whole number
    const hasSubsquares = Math.sqrt(rowCount) % 1 === 0;
    if (!hasSubsquares) {
        return false;
    }

    // All conditions are met, so it is a valid shape
    return true;
};

// Helper function to init our array of objects.
const arrayOfObjects = size =>
    Array(size)
    .fill(null)
    .map(() => ({}));

const nestedArrayOfObjects = size =>
    Array(size)
    .fill(null)
    .map(() => arrayOfObjects(size));

const hasValidCells = board => {
    // Get the dimensions of the board and sub-squares
    const sizeOfBoard = board.length;
    const sizeOfSubsquare = Math.sqrt(sizeOfBoard);

    // Create our one-dimensional array of hash tables for rows and columns
    const rows = arrayOfObjects(sizeOfBoard);
    const columns = arrayOfObjects(sizeOfBoard);

    // Create a two-dimensional array of hash tables
    // where there is a separate hash table for each sub-square
    const subsquares = nestedArrayOfObjects(sizeOfSubsquare);

    for (let row = 0; row < sizeOfBoard; row++) {
        for (let col = 0; col < sizeOfBoard; col++) {
            const cellValue = board[row][col];

            // If we have a value, we need to add it to our hash tables
            // and return false if a value already existed.
            if (cellValue > 0) {
                // Since the sub-square tracker is a 2D jxj array,
                // we need to normalize the coordinates by j
                const subsquareRow = Math.floor(row / sizeOfSubsquare);
                const subsquareCol = Math.floor(col / sizeOfSubsquare);

                // Initialize and/or increment the cell value for the corresponding row, column, sub-square
                //
                // rows and columns are a 1-D array where we look for the cellValue in a hash table
                rows[row][cellValue] = (rows[row][cellValue] || 0) + 1;
                columns[col][cellValue] = (columns[col][cellValue] || 0) + 1;
                //
                // subsquares is a 2-D matrix
                subsquares[subsquareRow][subsquareCol][cellValue] =
                    (subsquares[subsquareRow][subsquareCol][cellValue] || 0) + 1;

                // If the value is greater than 1, we have already seen this in the hash table
                const hasRowDuplicate = rows[row][cellValue] > 1;
                const hasColumnDuplicate = columns[col][cellValue] > 1;
                const hasSubsquareDuplicate = subsquares[subsquareRow][subsquareCol][cellValue] > 1;

                // Return if there are any duplicates
                if (hasRowDuplicate || hasColumnDuplicate || hasSubsquareDuplicate) {
                    return false;
                }
            }
        }
    }

    // We iterated to the end and didn't find any duplicates
    return true;
};

const isValidSudokuBoard = board => {
    // Exit early if the board does not have a valid shape
    if (!hasValidShape(board)) {
        return false;
    }

    return hasValidCells(board);
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

const board2 = [
    [0, 0, 6, 0, 0, 4, 0, 0, 0],
    [5, 0, 0, 1, 0, 0, 0, 0, 8],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 0, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 0, 0, 0, 0],
    [4, 1, 0, 8, 0, 0, 9, 0, 0],
    [7, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 6, 0, 0, 1],
];
console.log(isValidSudokuBoard(board2));
console.log(isValidSudokuBoard(board));


/*
Given a Sudoku board that is either partially or completely filled,
determine if it is a valid board based on the numbers that are in
each cell. A valid Sudoku board means there are no duplicate
integers within a given row, column, or sub-square.
There’s a catch - we want our Sudoku validator to work for any k x
k
size board, not just the standard 9 x 9 board.
The problem input will be a 2-dimensional array that corresponds
to the rows and columns of the board. The values of the array will
https://skilled.dev/course/valid-sudoku-board
1/146/24/2020
Valid Sudoku Board Coding Interview Question | Skilled.dev
be 0-k where 0 means it is an empty cell and 1-k are values in
a cell.
To be valid, the board must be a square of n = k x k where k is
the length of each side and n is the total number of cells. Let's
also call j = sqrt(k) - a valid board must consist of sub-squares
that are j x j .
A standard 9 x 9 Sudoku board would have n = 81 cells, k =
9
row and column length, and each sub-square would have a row
and column length of j = 3 .
A valid board must meet the following criteria:
1. The board must be a square of k x k , and it must be
composed of j x j size sub-squares.
2. Rows: inside a given row, a value 1-k cannot appear
more than once
3. Columns: inside a given column, a value 1-k cannot
appear more than once
4. Sub-squares: inside a given sub-square, a value 1-
k
cannot appear more than once
Write a function isValidSudokuBoard which returns a boolean
indicating if the board is valid.
Keep in mind that we only want to determine that the board
is valid and do not care if it is solvable. To be considered valid,
the input only needs to match the outlined criteria. We do not care
if the board is mathematically solvable and could reach a
completed state from the initial board.
Example 1:

// Input
const board = [
[0, 0, 6, 0, 0, 4, 0, 0, 0],
[5, 0, 0, 1, 0, 0, 0, 0, 8],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 4, 0, 0, 0, 3, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 2, 0, 0, 0, 0, 0, 0],
[4, 1, 0, 8, 0, 0, 9, 0, 0],
[7, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 6, 0, 0, 1],
];
// Output
isValidSudokuBoard(board); // true
Example 2:
// Input
const board = [
[0, 2, 0],
[1, 0, 0],
];
// Output
// The shape of the board is invalid.
isValidSudokuBoard(board); // false
Example 3:
// Input
const board
[0, 2, 0,
[1, 0, 0,
[0, 0, 0,
[0, 3, 0,
];
= [
4],
0],
0],
4],
// Output
// In the last column we have the number 4 duplicated.
isValidSudokuBoard(board); // false


*/