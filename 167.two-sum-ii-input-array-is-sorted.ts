// @leet start
function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const total = numbers[left] + numbers[right];
    if (total > target) {
      right--;
    } else if (total < target) {
      left++;
    } else {
      return [left+1, right+1];
    }
  }
  return [0, 0];
}
// @leet end
