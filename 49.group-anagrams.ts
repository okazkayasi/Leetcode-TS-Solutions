// @leet start
function groupAnagrams(strs: string[]): string[][] {
  const freqMap = new Map<string, string[]>();
  for (let index = 0; index < strs.length; index++) {
    const str = strs[index];
    const freqArray = Array.from({ length: 26 }, () => 0);
    for (const char of str) {
      const charInd = char.charCodeAt(0) - "a".charCodeAt(0);
      freqArray[charInd] = (freqArray[charInd] ?? 0) + 1;
    }
    const freqStr = freqArray.join(",");
    if (!freqMap.has(freqStr)) freqMap.set(freqStr, []);
    freqMap.get(freqStr)?.push(str);
  }
  return Array.from(freqMap.values());
}
// @leet end
