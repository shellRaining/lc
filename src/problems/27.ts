function removeElement(nums: number[], val: number): number {
  const len = nums.length;
  let l = 0;
  let r = 0;
  while (r < len) {
    const rv = nums[r];
    if (rv != val) {
      nums[l] = rv;
      l++;
    }
    r++;
  }
  return l;
}

const nums1 = [3, 2, 2, 3];
const val1 = 3;
console.log(removeElement(nums1, val1), nums1);
const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
const val2 = 2;
console.log(removeElement(nums2, val2), nums2);

export { removeElement };
