function minSubArrayLen(target: number, nums: number[]): number {
  let res = Number.MAX_SAFE_INTEGER;
  let r = 0;
  let sum = 0;
  const len = nums.length;

  for (let l = 0; l < len; l++) {
    while (sum < target && r < len) {
      sum += nums[r];
      r++;
    }
    if (sum >= target) {
      res = Math.min(res, r - l);
    }

    sum -= nums[l];
  }

  // for (let r = 0; r < len; r++) {
  //   sum += nums[r];
  //   while (sum - nums[l] >= target) {
  //     sum -= nums[l];
  //     l++;
  //   }
  //   if (sum >= target) res = Math.min(res, r - l + 1);
  // }

  return res == Number.MAX_SAFE_INTEGER ? 0 : res;
}

const target1 = 7;
const nums1 = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target1, nums1));
const target2 = 4;
const nums2 = [1, 4, 4];
console.log(minSubArrayLen(target2, nums2));
const target3 = 11;
const nums3 = [1, 1, 1, 1, 1, 1, 1, 1];
console.log(minSubArrayLen(target3, nums3));
export { minSubArrayLen };
