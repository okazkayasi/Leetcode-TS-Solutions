// @leet start
function twoSum(nums: number[], target: number): number[] {

  for (let i = 0; i < nums.length; i++) {
    const first = nums[i];
    for (let j = i; j < nums.length; j++) {
      const second = nums[j];
      if (first + second === target) return [i, j];
    }
  }
  return [];
};
// @leet end
