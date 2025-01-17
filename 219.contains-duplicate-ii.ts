// @leet start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  if (nums.length === 0) {
    return false;
  }

  const set = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    const numToRemove = nums[i - k - 1];
    if (i > k) set.delete(numToRemove);
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }
  return false;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (j - i > k) break;
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
}
// @leet end
