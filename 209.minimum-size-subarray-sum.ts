// @leet start

function helper(
  target: number,
  nums: number[],
  left: number,
  right: number,
  prevSum: number,
): number {
  const sumWithoutLeft = prevSum - nums[left];
  const sumWithoutRight = prevSum - nums[right];

  if (sumWithoutLeft < target && sumWithoutRight < target) {
    return right - left + 1;
  } else {
    return Math.min(
      helper(target, nums, left + 1, right, sumWithoutLeft),
      helper(target, nums, left, right - 1, sumWithoutRight),
    );
  }
}

function slidingWindow(target: number, nums: number[]): number {
  let l1 = 0;
  let ans = nums.length;
  let found = false;
  let currentSum = 0;
  for (let l2 = 0; l2 < nums.length; l2++) {
    currentSum += nums[l2];
    while (currentSum >= target) {
      found = true;
      ans = Math.min(ans, l2 - l1 + 1);
      currentSum -= nums[l1];
      l1++;
    }
  }
  return found ? ans : 0;
}

function recursion(target:number, nums:number[]){
  let min = nums.length;
  let allSum = nums.reduce((a, b) => a + b, 0);
  if (allSum >= target) {
    min = nums.length;
  } else {
    return 0;
  }
  if (nums.length <= 1) return min;
  return helper(target, nums, 0, nums.length - 1, allSum);
}

function minSubArrayLen(target: number, nums: number[]): number {
  return slidingWindow(target, nums);
}
// @leet end
