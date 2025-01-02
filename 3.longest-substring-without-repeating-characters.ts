// @leet start

function findLongestSubstring(s: string) {
  let longest = "";
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (longest.indexOf(element) === -1) {
      longest = longest + element;
    } else {
      max = Math.max(max, longest.length);
      longest = longest.slice(longest.indexOf(element) + 1) + element;
    }
  }
  return Math.max(max, longest.length);
}

function lengthOfLongestSubstring(s: string): number {
  return findLongestSubstring(s);
}
// @leet end
