// @leet start

function checkIfDuplicateExists(result: number[][], res: number[]): boolean {
  for (let i = 0; i < result.length; i++) {
    const checkElm = result[i];
    let isDuplicate = true;
    for (let j = 0; j < checkElm.length; j++) {
      const elm = checkElm[j];
      if (elm !== res[j]) {
        isDuplicate = false;
      }
    }
    if (isDuplicate) return true;
  }
  return false;
}

function twoSumII(nums: number[], i: number, result: number[][]) {
  const target = nums[i];
  let left = i + 1;
  let right = nums.length - 1;
  while (left < right && left < nums.length && right >= 0) {
    const leftNum = nums[left];
    const rightNum = nums[right];
    const sum = leftNum + rightNum + target;
    if (sum === 0) {
      result.push([target, leftNum, rightNum]);
      left++;
      while (left < right && leftNum === nums[left]) {
        left++;
      }
    } else if (sum > 0) {
      right--;
    } else if (sum < 0) {
      left++;
    } else if (i === left) left++;
    else if (i === right) right--;
  }
}

function threeSumUsingTwoSumII(nums: number[]): number[][] {
  const result: number[][] = [];

  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      twoSumII(nums, i, result);
    }
  }
  return result;
}

function threeSumBruteForce(nums: number[]): number[][] {
  const result: number[][] = [];
  const set = new Set<number[]>();
  for (let i = 0; i < nums.length; i++) {
    const target = nums[i];

    const map = new Map<number, number[]>();

    for (let j = i + 1; j < nums.length; j++) {
      const element = nums[j];
      const lastTarget = -1 * (target + element);
      map.set(lastTarget, [i, j]);
    }
    for (let k = i + 2; k < nums.length; k++) {
      const lastElm = nums[k];
      const targetInMap = map.get(lastElm);
      if (targetInMap != null) {
        const res = [nums[targetInMap[0]], nums[targetInMap[1]], lastElm].sort(
          (a, b) => a - b,
        );
        if (!checkIfDuplicateExists(result, res)) {
          result.push(res);
        }
      }
    }
  }
  return result;
}

function threeSum(nums: number[]): number[][] {
  return threeSumUsingTwoSumII(nums);
}
// @leet end

// @leet end
