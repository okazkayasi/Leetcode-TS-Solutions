// @leet start

function validPalindrome(s: string, mistake = false): boolean {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      if (!mistake) {
        const newStringWithoutLeft = s.slice(left + 1, right + 1);
        const newStringWithoutRight = s.slice(left, right);
        return validPalindrome(newStringWithoutLeft, true) || validPalindrome(newStringWithoutRight, true)
      } else {
        return false;
      }
    }
    left++;
    right--;
  }
  return true;

};
// @leet end
