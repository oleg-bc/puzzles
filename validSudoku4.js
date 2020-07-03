function isValidSolution(grid) {

    function check(arr) {
        return arr.sort()
            .filter(function(val, index) {
                return val === index + 1;
            })
            .length === 9;
    }

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

    for (let i = 0; i < 9; i++) {
        const col = [];
        const row = [];

        for (let j = 0; j < 9; j++) {
            col.push(grid[j][i]);
            row.push(grid[i][j]);
        }

        if (!check(col) || !check(row)) return false;
    }

    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            if (!check(getSquare(grid, x, y))) return false
        }
    }

    return true;
}