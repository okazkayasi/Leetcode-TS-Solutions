// @leet start

function checkIfClosing(s1: string, s2: string): boolean {
  if (s1 === "(" && s2 === ")") return true;
  if (s1 === "{" && s2 === "}") return true;
  if (s1 === "[" && s2 === "]") return true;
  return false;
}


function isValid(s: string): boolean {

  const stack: string[] = [];
  let index = 0;
  while (index < s.length) {
    const char = s[index];
    const stackTop = stack[stack.length - 1];
    if (checkIfClosing(stackTop, char)) {
      stack.pop();
    } else {
      stack.push(char);
    }
    index++;
  }
  return stack.length === 0;

};
// @leet end
