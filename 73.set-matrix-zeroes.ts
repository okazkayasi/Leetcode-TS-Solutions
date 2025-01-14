// @leet start
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const zeros: number[][] = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        zeros.push([i, j]);
      }
    }
  }
  for (let i = 0; i < zeros.length; i++) {
    const [row, col] = zeros[i];
    for(let j = 0; j < matrix.length; j++){
      matrix[j][col] = 0;
    }
    for(let j = 0; j < matrix[row].length; j++){
      matrix[row][j] = 0;
    }
  }
}
// @leet end
