function helper(row, col, grid) {
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length || grid[row][col] === '0') return;
  grid[row][col] = '0'
  helper(row, col + 1, grid);
  helper(row, col - 1, grid);
  helper(row + 1, col, grid);
  helper(row - 1, col, grid);
}


var numIslands = function (grid) {
  let islandCount = 0
  for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
          if (grid[row][col] === '1') {
              islandCount++;
              helper(row, col, grid);
          }
      }
  }
  return islandCount
}

getNeighbors(row, col, matrix) {
  const neighbors = [];

  // Check top
  if (row > 0 && matrix[row - 1][col] === "1") {
    neighbors.push([row - 1, col]);

  };

  // Check right
  if (col < matrix[0].length - 1 && matrix[row][col + 1] === "1") {
    neighbors.push([row, col + 1]);

  };
  // Check bottom
  if (row < matrix.length - 1 && matrix[row + 1][col] === "1") {
    neighbors.push([row + 1, col]);

  }

  // Check left
  if (col > 0 && matrix[row][col - 1] === "1") {
    neighbors.push([row, col - 1]);

  }
  return neighbors;

}


// var numIslands = function(grid) {
//   const visited = new Set();
//   let count = 0;
//   for(let row = 0; row < grid.length; row++){
//       for(let col = 0; col < grid[0].length; col++){
//         if(grid[row][col].toString() === "1" && !visited.has([row,col].toString())){
//           count++;
//           const stack = [[row,col]];
//           visited.add([row,col].toString());
//           while(stack.length){
//             const currEle = stack.pop();
//             const neighbors = getNeighbors(currEle[0], currEle[1], grid);
//             neighbors.forEach(neighbor => {
//               if(!visited.has(neighbor.toString())){
//                 stack.push(neighbor);
//                 visited.add(neighbor.toString());
//               }
//             })
//           }
//          }
//         }
//        }
//       return count;
//       }
