// @leet start
function findSubstring(s: string, words: string[]): number[] {
  const len = words[0].length;
  let leftInd = 0;
  let startingIndex = 0;
  let isActive = false;

  const result: number[] = [];
  let mutableWords = [...words];

  let yesWeHave = false;
  let lastWord = "";
  let newWordInd = 0;
  console.log(s.length);
  for (let rightInd = len; rightInd <= s.length; rightInd += len) {
    if (yesWeHave && leftInd + len * words.length <= s.length) {
      const word = s.slice(newWordInd, newWordInd + len)
      if (word === lastWord) {
        result.push(result[result.length - 1] + len);
        leftInd += len;
        rightInd = leftInd;
      } else {
        yesWeHave = false;
        rightInd = leftInd;
      }
    }
    else {
      const word = s.slice(leftInd, rightInd);
      const wordInd = mutableWords.indexOf(word);
      if (wordInd !== -1) {
        lastWord = mutableWords[wordInd];
        mutableWords.splice(wordInd, 1);
        if (!isActive) {
          startingIndex = leftInd;
          isActive = true;
        }
        leftInd = rightInd;
      } else {
        if (!isActive) {
          leftInd++;
          rightInd = leftInd;
        } else {
          isActive = false;
          mutableWords = [...words];
          leftInd = startingIndex + 1;
          rightInd = leftInd;
        }
      }
      if (mutableWords.length === 0) {
        yesWeHave = true;
        result.push(startingIndex);
        mutableWords = [...words];
        isActive = false;
        leftInd = startingIndex + 1;
        newWordInd = rightInd;
        rightInd = leftInd
      }
    }
  }
  return result;
}
// @leet end
