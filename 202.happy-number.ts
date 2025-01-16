// @leet start
function isHappy(n: number): boolean {
  const loopSet = new Set<number>();
  let digits = n
    .toString()
    .split("")
    .map((a) => parseInt(a));

  while (true) {
    const newNumber = digits.reduce((a, b) => a + b ** 2, 0);
    if (newNumber === 1) return true;
    if (loopSet.has(newNumber)) return false;
    loopSet.add(newNumber);
    digits = newNumber
      .toString()
      .split("")
      .map((a) => parseInt(a));
  }
}
// @leet end
