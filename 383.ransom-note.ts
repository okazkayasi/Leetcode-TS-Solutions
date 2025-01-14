// @leet start
function canConstruct(ransomNote: string, magazine: string): boolean {
  const freqMap = new Map<string, number>();
  for (const char of magazine) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }
  for (const char of ransomNote) {
    const currentNum = freqMap.get(char);
    if (currentNum == null) {
      return false;
    }
    const newNum = currentNum - 1;
    if (newNum === 0) {
      freqMap.delete(char);
    } else {
      freqMap.set(char, newNum);
    }
  }
  return true;
}
// @leet end
