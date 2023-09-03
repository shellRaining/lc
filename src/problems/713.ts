function numSubarrayProductLessThanK(nums: number[], k: number): number {
  let r = 0;
  let res = 0;
  let prod = 1;
  const len = nums.length;

  // for (let r = 0; r < len; r++) {
  //   prod *= nums[r];
  //   while (prod >= k && l <= r) {
  //     prod /= nums[l];
  //     l++;
  //   }
  //   if (prod < k) res += r - l + 1;
  // }

  // TODO: this need update
  for (let l = 0; l < len; l++) {
    while (prod < k && r < len) {
      prod *= nums[r];
      r++;
    }

    if (prod < k) res += r - l;
  }

  return res;
}

const nums1 = [10, 5, 2, 6];
const k1 = 100;
console.log(numSubarrayProductLessThanK(nums1, k1));
const nums2 = [1, 2, 3];
const k2 = 1;
console.log(numSubarrayProductLessThanK(nums2, k2));

export { numSubarrayProductLessThanK };
