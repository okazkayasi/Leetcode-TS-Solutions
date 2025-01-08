// @leet start
function isPrefixAndSuffix(str1: string, str2: string): boolean {
  if (str1.length > str2.length) return false;
  if (str2.indexOf(str1) !== 0) return false;
  const sliceIndex = str2.length - str1.length;
  if (str2.slice(sliceIndex) !== str1) return false;
  return true;
}

function countPrefixSuffixPairs(words: string[]): number {
  let total = 0;
  for (let i = 0; i < words.length; i++) {
    const str1 = words[i];
    for (let j = i + 1; j < words.length; j++) {
      const str2 = words[j];
      if (isPrefixAndSuffix(str1, str2)) {
        total++;
      }
    }
  }
  return total;
};
// @leet end
