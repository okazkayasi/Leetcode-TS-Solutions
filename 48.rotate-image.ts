// @leet start
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for(let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }
}
// @leet end
