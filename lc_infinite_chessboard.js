/* O.T.L.U Problem

https://leetcode.com/problems/minimum-knight-moves/

Given an infinite chessboard, find minimum no. of steps for a knight to reach from the origin to (x, y).

Accepted solution: Bidirectional BFS.
There's also constant time solution.

Follow-up:
A list of forbidden coordinates are introduced where knight can’t reach. Handle this in your code. Make sure the infinite loop is handled since the board is infinite.

Related problems:

https://leetcode.com/problems/escape-a-large-maze*/


/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function(x, y) {
    const queue = [];
    const visited = new Set();
  
    const directions = [[2,1], [1,2], [-2,1], [-1,2], [2,-1], [1,-2], [-2,-1], [-1,-2], ];
  
    //          x, y, steps
    queue.push([0, 0, 0]);
    let key = 0 + '_' + 0;
    visited.add(key);
  
    let currX, currY, currSteps;
  
    while (queue.length > 0) {
      [currX, currY, currSteps] = queue.shift();
      if (currX === x && currY === y) {
        return currSteps;
      }
  
      for (let i = 0; i < directions.length; i++) {
        let direction = directions[i];
        let newX = currX + direction[0];
        let newY = currY + direction[1];
        key = newX + '_' + newY;
  
        if (!visited.has(key)) {
          queue.push([newX, newY, currSteps + 1]);
          visited.add(key);
        }
      }
    }
  
  
  };
  
  console.log(minKnightMoves(5,5));
