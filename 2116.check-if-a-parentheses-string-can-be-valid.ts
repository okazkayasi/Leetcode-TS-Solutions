// @leet start
function canBeValid(s: string, locked: string): boolean {
  let lockedArr: number[] = [];
  let free: number[] = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let isLocked = locked[i] === '1';

    if (!isLocked) {
      free.push(i)
    }
    else if (char === "(") {
      lockedArr.push(i);
    }
    else if (char === ")") {
      if (lockedArr.length > 0) {
        lockedArr.pop();
      } else if (free.length > 0) {
        free.pop();
      } else {
        return false;
      }
    }
  }

  for (let i = lockedArr.length - 1; i >= 0; i--) {
    const lockedInd = lockedArr[i];
    if (free.length === 0) return false;
    // get last of free
    const lastFree = free.pop();
    if (lastFree == null || lastFree < lockedInd) {
      return false;
    }
  }
  return free.length % 2 === 0;
};
// x)x)xx
// @leet end
