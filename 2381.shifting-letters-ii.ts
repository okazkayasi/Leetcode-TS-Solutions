// @leet start

const mod = (n: number, m: number) => ((n % m) + m) % m;

function shiftLetter(letter: string, shift: number): string {
  const code = letter.charCodeAt(0) - 97;
  const newCode = mod(code + shift, 26);
  return String.fromCharCode(newCode + 97);
}

function changeCharInString(s: string, index: number, newChar: string) {
  return s.substring(0, index) + newChar + s.substring(index + 1);
}

function changeString(s: string, diffArr: number[]): string {
  let res = "";
  let current = 0;
  for (let i = 0; i < diffArr.length; i++) {
    current += diffArr[i];
    const letter = s[i];
    const shiftedLetter = shiftLetter(letter, current);
    res += shiftedLetter;
  }
  return res;
}

function shiftingLetters(s: string, shifts: number[][]): string {
  const diffArr = new Array(s.length).fill(0);

  shifts.forEach((shift) => {
    let startInd = shift[0];
    let endInd = shift[1];
    const forward = shift[2] === 1;
    diffArr[startInd] += forward ? 1 : -1;
    if (endInd < s.length - 1) {
      diffArr[endInd + 1] += forward ? -1 : 1;
    }
  });
  console.log(diffArr);
  return changeString(s, diffArr);
}
// @leet end
