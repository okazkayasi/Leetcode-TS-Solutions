// @leet start
function isIsomorphic(s: string, t: string): boolean {
  const map = new Map<string, string>();
  const assigned = new Set<string>();
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      if (map.get(s[i]) !== t[i]) return false;
    } else {
      if (assigned.has(t[i])) return false;
      map.set(s[i], t[i]);
      assigned.add(t[i]);
    }
  }
  return true;
}
// @leet end
