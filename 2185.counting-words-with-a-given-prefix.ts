// @leet start
const prefixCount = (words: string[], pref: string) =>
  words.filter((w) => w.startsWith(pref)).length;
// @leet end
