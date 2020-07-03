function sudoku2(grid) {

    function check(arr) {
        return arr.sort()
            .filter(function(val, index) {
                return val === index + 1;
            })
            .length === 9;
    }

    for (let i = 0; i < 9; i++) {
        let col = [];
        let row = [];
        let square = [];
        for (let j = 0; j < 9; j++) {
            col.push(grid[j][i]);
            row.push(grid[i][j]);
            square.push(grid[Math.floor(j / 3) + (i % 3) * 3][j % 3 + Math.floor(i / 3) * 3]);
        }
        if (!check(col) || !check(row) || !check(square)) return false;
    }
    return true;
}