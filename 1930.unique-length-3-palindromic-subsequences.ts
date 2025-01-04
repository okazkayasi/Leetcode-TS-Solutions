// @leet start

function lettersInBetween(s: string): number {
  const set = new Set<string>();
  let count = 0;
  for (let i = 0; i < s.length - 2; i++) {
    const char = s[i];
    if (!set.has(char)) {
      const betweenSet = new Set<string>();
      const left = s.indexOf(char);
      const right = s.lastIndexOf(char);
      for (let j = left + 1; j < right; j++) {
        const betweenChar = s[j];
        if (!betweenSet.has(betweenChar)) {
          betweenSet.add(betweenChar);
          count++;
        }
      }
      set.add(char);
    }
  }
  return count;
}

function threePointers(s: string): number {
  let left = 0;
  let mid = 1;
  let right = 2;
  let count = 0;
  const set = new Set<string>();
  const leftSet = new Set<string>();
  while (left < s.length - 2) {
    let leftCount = 0;
    if (leftSet.has(s[left])) {
      left++;
      continue;
    }
    mid = left + 1;
    while (mid < s.length - 1) {
      if (leftCount >= 26) break;
      right = mid + 1;
      while (right < s.length) {
        if (s[left] === s[right]) {
          const pal = s[left] + s[mid] + s[right];
          if (!set.has(pal)) {
            set.add(pal);
            count++;
            leftCount++;
            if (count >= 26 * 26) return 26 * 26;
          }
        }
        right++;
      }
      mid++;
    }
    leftSet.add(s[left]);
    left++;
  }
  return count;
}

function countPalindromicSubsequence(s: string): number {
  return lettersInBetween(s);
}
// @leet end
