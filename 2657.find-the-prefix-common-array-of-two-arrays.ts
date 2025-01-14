// @leet start
function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  let current = 0;
  const res: number[] = [];
  const aSet = new Set<number>();
  const bSet = new Set<number>();
  const resSet = new Set<number>();
  for (let i = 0; i < A.length; i++) {
    const elmA = A[i];
    const elmB = B[i];

    aSet.add(elmA);
    bSet.add(elmB);
    if (bSet.has(elmA)) {
      if (!resSet.has(elmA)) {
        current++;
        resSet.add(elmA);
      }
    }
    if (aSet.has(elmB)) {
      if (!resSet.has(elmB)) {
        current++;
        resSet.add(elmB);
      }
    }
    res.push(current);
  }

  return res;
}
// @leet end
