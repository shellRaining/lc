/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  const len = nums.length;
  let l = 0;
  let r = 0;
  while (r < len) {
    const rv = nums[r];
    if (rv != 0) {
      nums[l] = rv;
      l++;
    }
    r++;
  }
  while (l < len) {
    nums[l] = 0;
    l++;
  }
}

const nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1); // [1,3,12,0,0]
const nums2 = [0];
moveZeroes(nums2);
console.log(nums2); // [0]

export { moveZeroes };
