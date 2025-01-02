// @leet start

function mergeSort(nums1: number[], nums2: number[]): number[] {
  const result: number[] = [];
  let l1 = 0;
  let l2 = 0;
  while (l1 < nums1.length && l2 < nums2.length) {
    const first = nums1[l1];
    const second = nums2[l2];
    if (first < second) {
      result.push(first);
      l1++;
    } else {
      result.push(second);
      l2++;
    }
  }
  while (l1 < nums1.length) {
    result.push(nums1[l1]);
    l1++;
  }
  while (l2 < nums2.length) {
    result.push(nums2[l2]);
    l2++;
  }
  return result;
}

function findMedian(nums: number[]): number {
  const len = nums.length;
  if (len % 2 === 0) {
    const leftIndex = len / 2 - 1;
    const rightIndex = len / 2;
    return (nums[leftIndex] + nums[rightIndex]) / 2;
  } else {
    const index = Math.floor(len / 2);
    return nums[index];
  }
}

function getMedian(nums1: number[], nums2: number[]): number {
  const totalLength = nums1.length + nums2.length;
  const isEven = totalLength % 2 === 0;
  if (isEven) {
    const leftIndex = totalLength / 2 - 1;
    const rightIndex = totalLength / 2;

    let l1 = 0;
    let l2 = 0;
    let currentIndex = 0;
    let leftVal = -1;
    let rightVal = -1;
    while (l1 < nums1.length || l2 < nums2.length) {
      let value = 0;
      if (l2 >= nums2.length || nums1[l1] < nums2[l2]) {
        value = nums1[l1];
        l1++;
      } else {
        value = nums2[l2];
        l2++;
      }
      if (currentIndex === leftIndex) {
        leftVal = value;
      } else if (currentIndex === rightIndex) {
        rightVal = value;
      }
      if (leftVal !== -1 && rightVal !== -1) {
        return (leftVal + rightVal) / 2;
      }
      currentIndex++;
    }
  } else {
    const index = Math.floor(totalLength / 2);
    let l1 = 0;
    let l2 = 0;
    let currentIndex = 0;
    while (l1 < nums1.length || l2 < nums2.length) {
      let value: number;
      if (l2 >= nums2.length || nums1[l1] < nums2[l2]) {
        value = nums1[l1];
        l1++;
      } else {
        value = nums2[l2];
        l2++;
      }
      if (currentIndex === index) {
        return value;
      }
      currentIndex++;
    }
  }
}

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  return getMedian(nums1, nums2);
  const mergedArray = mergeSort(nums1, nums2);
  console.log(mergedArray);
  return findMedian(mergedArray);
}
// @leet end
