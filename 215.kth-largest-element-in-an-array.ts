// @leet start
function findKthLargest(nums: number[], k: number): number {
  const sortedNums = nums.sort((a, b) => b - a);
  return sortedNums[k - 1];
};
// @leet end
