// @leet start

function minWindow(s: string, t: string): string {
  let right = 0;
  let left = 0;
  let res = "";
  let resLen = Number.MAX_SAFE_INTEGER;
  const tMap = new Map<string, number>();
  const windowMap = new Map<string, number>();
  let have = 0;

  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    const tMapVal = tMap.get(char);
    if (tMapVal != null) {
      tMap.set(char, tMapVal + 1);
    } else {
      tMap.set(char, 1);
    }
    if (!windowMap.has(char)) windowMap.set(char, 0);
  }
  const need = tMap.size;

  while (right < s.length) {
    const charAtRight = s[right];
    if (windowMap.has(charAtRight)) {
      windowMap.set(charAtRight, (windowMap.get(charAtRight) || 0) + 1);
      if (windowMap.get(charAtRight) === tMap.get(charAtRight)) {
        have++;
      }
    }

    while (have >= need) {
      const currentLen = right - left;
      const currentWord = s.slice(left, right + 1);
      res = resLen > currentLen ? currentWord : res;
      resLen = resLen > currentLen ? currentLen : resLen;
      const charAtLeft = s[left];
      if (windowMap.has(charAtLeft)) {
        windowMap.set(charAtLeft, (windowMap.get(charAtLeft) || 0) - 1);
        if (windowMap.get(charAtLeft) < tMap.get(charAtLeft)) {
          have--;
        }
      }
      left++;
    }
    right++;
  }

  return res;
}
// @leet end
