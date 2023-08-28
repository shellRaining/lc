function removeDuplicates(nums: number[]): number {
  const len = nums.length;
  let l = 0;
  let r = 0;
  while (r < len) {
    const lv = nums[l];
    const rv = nums[r];
    if (lv != rv) {
      l++;
      nums[l] = rv;
    }
    r++;
  }
  return l + 1;
}

const nums1 = [1, 1, 2];
console.log(removeDuplicates(nums1), nums1);
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums2), nums2);

export { removeDuplicates };
