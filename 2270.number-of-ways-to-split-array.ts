// @leet start
function waysToSplitArray(nums: number[]): number {
  let leftSum = nums[0];
  let rightSum = nums.slice(1).reduce((a, b) => a + b, 0);
  let index = 1;
  let numOfValidSplit = 0;

  while (index < nums.length) {
    if (leftSum >= rightSum) {
      numOfValidSplit++;
    }
    leftSum += nums[index];
    rightSum -= nums[index];
    index++;
  }
  return numOfValidSplit;
}
// @leet end
