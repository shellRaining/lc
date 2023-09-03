function sortedSquares(nums: number[]): number[] {
  let idx = 0;
  while (nums[idx] < 0) idx++;
  let l = idx - 1;
  let r = idx;
  if (l < 0) return nums.map((v) => v * v);
  if (r >= nums.length) return nums.reverse().map((v) => v * v);

  const res = [];
  while (l >= 0 && r < nums.length) {
    if (-nums[l] < nums[r]) {
      res.push(nums[l] * nums[l]);
      l--;
    } else {
      res.push(nums[r] * nums[r]);
      r++;
    }
  }
  while (l >= 0) {
    res.push(nums[l] * nums[l]);
    l--;
  }
  while (r < nums.length) {
    res.push(nums[r] * nums[r]);
    r++;
  }
  return res;
}

const nums1 = [-4, -1, 0, 3, 10];
const nums2 = [-7, -3, 2, 3, 11];
const nums3 = [-10000, -9999, -7, -5, 0, 0, 10000];
console.log(sortedSquares(nums1));
console.log(sortedSquares(nums2));
console.log(sortedSquares(nums3));

export { sortedSquares };
