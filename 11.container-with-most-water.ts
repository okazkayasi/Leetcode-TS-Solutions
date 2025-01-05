// @leet start

function brutishForce(height: number[]): number {
  let left = 0;
  const n = height.length;
  let max = 0;
  while (left < n - 1) {
    const longestPossible = n - 1 - left;
    const maxAreaPossible = longestPossible * height[left];
    if (max >= maxAreaPossible) {
      left++;
      continue;
    }
    let right = left + 1;
    while (right < n) {
      const candidate = Math.min(height[left], height[right]) * (right - left);
      max = Math.max(max, candidate);
      right++;
    }
    left++;
  }
  return max;
}

function twoPointer(height: number[]): number {
  let max = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const candidate = (right - left) * Math.min(height[left], height[right]);
    max = Math.max(max, candidate);
    if(height[left]<height[right]){
      left++;
    }else{
      right--;
    }
  }
  return max;
}

function maxArea(height: number[]): number {
  return twoPointer(height);
}
// @leet end
