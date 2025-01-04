// @leet start
function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  const map = new Map<number, string>();
  let row = 0;
  let goDown = true;
  for (let i = 0; i < s.length; i++) {
    const elm = s[i];
    if (map.has(row)) {
      map.set(row, map.get(row) + elm);
    } else {
      map.set(row, elm);
    }
    row = goDown ? row + 1 : row - 1;
    if (row === 0) goDown = true;
    if (row === numRows - 1) goDown = false;
  }
  let ans = "";
  for (let i = 0; i < numRows; i++) {
    if (map.get(i) != null) {
      ans += map.get(i);
    }
  }
  return ans;
}
// @leet end
