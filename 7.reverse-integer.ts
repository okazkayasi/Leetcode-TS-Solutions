// @leet start
function reverse(x: number): number {
  const isNegative = x < 0;
  const num = isNegative ? -1 * x : x;

  const numStr = num.toString();
  const reversed = numStr.split("").reverse().join("");
  const reverseNum = parseInt(reversed);

  const finalNum = isNegative ? -1 * reverseNum : reverseNum;
  if (finalNum > Math.pow(2, 31) - 1) return 0;
  if (finalNum < -1 * Math.pow(2, 31)) return 0;

  return finalNum;
}
// @leet end
