// @leet start
function spiralOrder(matrix: number[][]): number[] {
  const ans: number[] = [];
  const cols = matrix[0].length;
  const rows = matrix.length;
  const total = rows * cols;

  let index = 0;
  let current = 0;

  const set = new Set<number>();
  let direction = "R";

  while (current < total) {
    const row = Math.floor(index / cols);
    const col = index % cols;
    ans.push(matrix[row][col]);
    set.add(index);
    if (direction === "R") {
      const newCol = col + 1;
      if (set.has(index + 1) || newCol >= cols) {
        direction = "D";
        index += cols;
      } else {
        index++;
      }
    } else if (direction === "D") {
      const newRow = row + 1;
      if (set.has(index + cols) || newRow >= rows) {
        direction = "L";
        index--;
      } else {
        index += cols;
      }
    } else if (direction === "L") {
      const newCol = col - 1;
      if (set.has(index - 1) || newCol < 0) {
        direction = "U";
        index -= cols;
      } else {
        index--;
      }
    } else if (direction === "U") {
      const newRow = row - 1;
      if (set.has(index - cols) || newRow < 0) {
        direction = "R";
        index++;
      } else {
        index -= cols;
      }
    }
    current++;
  }
  return ans;
}
// @leet end
