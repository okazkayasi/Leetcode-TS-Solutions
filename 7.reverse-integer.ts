// @leet start
function reverseAsNumber(x: number): number {
  const isNegative = x < 0;
  let num = isNegative ? -1 * x : x;
  let res = 0;

  while (num > 0) {
    const lastDigit = num % 10;
    res = res * 10 + lastDigit;
    num = Math.floor(num / 10);
    if (res > Math.pow(2, 31) - 1) return 0;
    if (res < -1 * Math.pow(2, 31)) return 0;
  }
  return isNegative ? -1 * res : res;
}

function reverseAsString(x: number): number {
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

function reverse(x: number): number {
  return reverseAsNumber(x);
}
// @leet end
