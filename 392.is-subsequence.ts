// @leet start
function isSubsequence(s: string, t: string): boolean {
  if (s.length === 0) return true;
  if (t.length === 0) return false;
  let tIndex = 0;

  for (let i = 0; i < s.length; i++) {
    const charToLookFor = s[i];
    let found = false;
    while (tIndex <= t.length) {
      if (t[tIndex] === charToLookFor) {
        found = true;
        tIndex++;
        break;
      }
      tIndex++;
    }
    if (!found) return false;
  }
  return true;
}
// @leet end
