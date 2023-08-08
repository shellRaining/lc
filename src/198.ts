function rob(nums: number[]): number {
  const len = nums.length;
  const dp = Array.from({ length: len + 1 }, () => {
    return -1;
  });
  dp[0] = 0;
  dp[1] = nums[0];

  for (let i = 2; i <= len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }

  return dp[len];
}

// function rob(nums: number[]): number {
//   const cache = Array.from({ length: nums.length }, () => {
//     return -1;
//   });
//
//   function bt(r: number) {
//     if (r == 0) return nums[0];
//     if (r < 0) return 0;
//     if (cache[r] != -1) return cache[r];
//     const res = Math.max(bt(r - 1), bt(r - 2) + nums[r]);
//     cache[r] = res;
//     return res;
//   }
//
//   return bt(nums.length - 1);
// }

// function rob(nums: number[]): number {
//   const len = nums.length;
//   if (len == 1) return nums[0];
//   if (len == 0) return 0;
//   const res = Math.max(rob(nums.slice(0, len - 1)), rob(nums.slice(0, len - 2)) + nums[len - 1]);
//   return res;
// }

const arr = [1, 2, 3, 1];
console.log(rob(arr));
const arr1 = [2, 7, 9, 3, 1];
console.log(rob(arr1));
