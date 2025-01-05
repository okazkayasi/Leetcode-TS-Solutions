// @leet start
function isPalindrome(s: string): boolean {
  const lowerCased = s.toLowerCase();
  const alphanumeric = lowerCased.replace(/[^a-z0-9]/g, '');
  const reversed = alphanumeric.split('').reverse().join('');
  return alphanumeric === reversed;
};
// @leet end
