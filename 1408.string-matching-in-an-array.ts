// @leet start
function stringMatching(words: string[]): string[] {
  const result: string[] = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < words.length; j++) {
      const wordToCheck = words[j];
      if (i === j) {
        continue;
      }
      if (wordToCheck.indexOf(word) !== -1) {
        result.push(word);
        break;
      }
    }
  }

  return result;
}
// @leet end
