// @leet start
const ROWS = 9;
const COLS = 9;
const SQUARE_SIZE = 3;

function isValidSudoku(board: string[][]): boolean {
  const numberOfRows = board.length;
  const numberOfCols = board[0].length;
  const rows: Set<string>[] = [];
  const cols: Set<string>[] = [];
  const squares: Set<string>[] = [];

  for (let i = 0; i < numberOfRows * numberOfCols; i++) {
    const row = Math.floor(i / numberOfCols);
    const col = i % numberOfCols;
    const square =
      Math.floor(row / SQUARE_SIZE) * SQUARE_SIZE +
      Math.floor(col / SQUARE_SIZE);

    const elm = board[row][col];
    if (elm === ".") continue;

    if (!rows[row]) rows[row] = new Set<string>();
    if (!cols[col]) cols[col] = new Set<string>();
    if (!squares[square]) squares[square] = new Set<string>();

    if (rows[row].has(elm)) return false;
    else rows[row].add(elm);

    if (cols[col].has(elm)) return false;
    else cols[col].add(elm);

    if (squares[square].has(elm)) return false;
    else squares[square].add(elm);
  }
  return true;
}

