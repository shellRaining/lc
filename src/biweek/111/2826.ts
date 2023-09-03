function minimumOperations(nums: number[]): number {
  const len = nums.length;
  // TODO: what is the init value
  // const dp = Array.from({ length: len + 1 }, () => {
  //   return Array.from({ length: 4 }, () => {
  //     return 0;
  //   });
  // });
  const dp = new Array(4).fill(0);

  for (let i = 1; i <= len; i++) {
    for (let j = 3; j > 0; j--) {
      let min = Number.MAX_SAFE_INTEGER;
      for (let k = j; k > 0; k--) {
        min = Math.min(min, dp[k]);
      }
      min += nums[i - 1] == j ? 0 : 1;
      dp[j] = min;
    }
  }
  return Math.min(dp[1], dp[2], dp[3]);
}

// function minimumOperations(nums: number[]): number {
//   const len = nums.length;
//   const cache: number[][] = Array.from({ length: len }, () => [undefined]);
//
//   function inner(idx: number, limit: number): number {
//     if (idx == 0) {
//       if (nums[idx] <= limit) return 0;
//       else return 1;
//     }
//
//     let min = Number.MAX_SAFE_INTEGER;
//     if (nums[idx] <= limit) {
//       min = Math.min(inner(idx - 1, nums[idx]), min);
//     }
//     for (let i = limit; i >= 1; i--) {
//       if (i == nums[idx]) continue;
//       min = Math.min(inner(idx - 1, i) + 1, min);
//     }
//     cache[idx][limit] = min;
//
//     return min;
//   }
//
//   return inner(len - 1, 3);
// }

const nums1 = [2, 1, 3, 2, 1];
console.log(minimumOperations(nums1));
const nums2 = [1, 3, 2, 1, 3, 3];
console.log(minimumOperations(nums2));
const nums3 = [2, 2, 2, 2, 3, 3];
console.log(minimumOperations(nums3));
export { minimumOperations };
