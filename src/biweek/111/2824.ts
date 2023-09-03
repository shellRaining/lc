// function countPairs(nums: number[], target: number): number {
//   const len = nums.length;
//   let res = 0;
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (nums[i] + nums[j] < target) {
//         res++;
//       }
//     }
//   }
//   return res;
// }

function countPairs(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let i = 0;
  let j = nums.length - 1;
  let res = 0;

  while (i < j) {
    if (nums[i] + nums[j] < target) {
      res += j - i;
      i++;
    } else {
      j--;
    }
  }

  return res;
}
const nums1 = [-1, 1, 2, 3, 1];
const target1 = 2;
console.log(countPairs(nums1, target1));
const nums2 = [-6, 2, 5, -2, -7, -1, 3];
const target2 = -2;
console.log(countPairs(nums2, target2));

export { countPairs };
