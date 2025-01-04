// @leet start
function checkIfValid(word: string) {
  const vovels = ["a", "e", "i", "o", "u"];
  return vovels.includes(word[0]) && vovels.includes(word[word.length - 1]);
}

function prefixSolution(words: string[], queries: number[][]): number[] {
  const result: number[] = [];
  let sum = 0;
  const prefixArray: number[] = [];
  for (let i = 0; i < words.length; i++) {
    const elm = words[i];
    const isValid = checkIfValid(elm);
    if (isValid) sum++;
    prefixArray.push(sum);
  }

  for (let i = 0; i < queries.length; i++) {
    const elm = queries[i];
    const left = elm[0];
    const right = elm[1];

    const ans =
      left === 0
        ? prefixArray[right]
        : prefixArray[right] - prefixArray[left - 1];
    result.push(ans);
  }
  return result;
}

function mapSolution(words: string[], queries: number[][]): number[] {
  const table = new Map<string, boolean>();
  const result: number[] = [];
  queries.forEach((element) => {
    const start = element[0];
    const end = element[1];
    let i = start;
    let numOfVovelStr = 0;
    while (i <= end) {
      const word = words[i];
      if (table.has(word)) {
        if (table.get(word) === true) {
          numOfVovelStr++;
        }
      } else {
        const isValid = checkIfValid(word);
        if (isValid) {
          numOfVovelStr++;
          table.set(word, true);
        } else {
          table.set(word, false);
        }
      }
      i++;
    }
    result.push(numOfVovelStr);
  });
  return result;
}

function vowelStrings(words: string[], queries: number[][]): number[] {
  return prefixSolution(words, queries);
}
// @leet end
