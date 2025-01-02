// @leet start
function checkIfPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

function findLongest(s: string, len: number): string | null {
  let left = 0;
  while (left + len <= s.length) {
    const candidate = s.slice(left, left + len);
    if (checkIfPalindrome(candidate)) {
      return candidate;
    }
    left++;
  }
  return null;
}

function longestPalindrome(s: string): string {
  let maxLen = s.length;
  while (maxLen > 1) {
    const longest = findLongest(s, maxLen);
    if (longest != null) {
      return longest;
    } else {
      maxLen--;
    }
  }
  return s[0];

  // let subString = "";
  // let left = 0;

  // let candidate = "";
  // while (left < s.length) {
  //   let right = left + 1;
  //   while (right <= s.length) {
  //     subString = s.slice(left, right);
  //     if (subString.length > candidate.length) {
  //       const isPalindrome = checkIfPalindrome(subString);
  //       if (isPalindrome) {
  //         candidate = subString;
  //       }
  //     }
  //     right++;
  //   }
  //   left++;
  // }
  // return candidate;
}
// @leet end
