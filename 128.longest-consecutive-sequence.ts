// @leet start
function longestConsecutive(nums: number[]): number {
  const set = new Set<number>(nums);
  let max = 0;
  for (const num of set) {
    if (set.has(num - 1)) continue;

    let next = num + 1;
    while (set.has(next)) {
      next++;
    }
    max = Math.max(max, next - num);
  }
  return max;
}
// @leet end
