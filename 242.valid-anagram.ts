// @leet start
function isAnagram(s: string, t: string): boolean {
  if(s.length !== t.length) return false;
  const sMap = new Map<string, number>();
  for(let i = 0; i < s.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
  }
  for(let i = 0; i < t.length; i++) {
    sMap.set(t[i], (sMap.get(t[i]) || 0) - 1);
    if(sMap.get(t[i]) === 0) sMap.delete(t[i]);
  }
  return sMap.size === 0;
};
// @leet end
