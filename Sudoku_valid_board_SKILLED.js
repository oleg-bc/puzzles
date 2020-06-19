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