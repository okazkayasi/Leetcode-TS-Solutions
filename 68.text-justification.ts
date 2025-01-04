// @leet start
function fullJustify(words: string[], maxWidth: number): string[] {
  let i = 0;
  const intArray: string[][] = [];
  while (i < words.length) {
    const word = words[i];
    const newLine = [word];
    let lineLength = word.length;
    let j = i + 1;
    while (j < words.length) {
      const newWord = words[j];
      if (lineLength + 1 + newWord.length <= maxWidth) {
        newLine.push(newWord);
        lineLength += newWord.length + 1;
        j++;
      } else {
        break;
      }
    }
    intArray.push(newLine);
    i = j;
  }
  for (let i = 0; i < intArray.length; i++) {
    const line = intArray[i];
    let count = line.reduce((a, b) => a + b.length, 0);
    let spaceCount = 0;
    while (count < maxWidth) {
      const ind =
        line.length === 1
          ? 0
          : i === intArray.length - 1
            ? line.length - 1
            : spaceCount % (line.length - 1);
      line[ind] = line[ind] + " ";
      count++;
      spaceCount++;
    }
  }
  let result: string[] = [];
  for (let i = 0; i < intArray.length; i++) {
    const wordArr = intArray[i];
    if (i === intArray.length - 1) {
      const numOfWords = intArray[intArray.length - 1].length;
      if (numOfWords > 1) {
        result.push(wordArr.join(" ").slice(0, -(numOfWords - 1)));
      } else {
        result.push(wordArr.join(""));
      }
    } else {
      result.push(wordArr.join(""));
    }
  }
  return result;
}
// @leet end
