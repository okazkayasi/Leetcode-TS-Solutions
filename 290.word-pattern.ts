// @leet start
function wordPattern(pattern: string, s: string): boolean {
  const map = new Map<string, string>();
  const assigned = new Set<string>();

  const words = s.split(" ");

  if (pattern.length !== words.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    if (map.has(char)) {
      if (map.get(char) !== words[i]) return false;
    } else {
      map.set(char, words[i]);
      if (assigned.has(words[i])) return false;
      assigned.add(words[i]);
    }
  }
  return true;
}
// @leet end
