// function maximumBeauty(nums: number[], k: number): number {
//   nums.sort((a, b) => a - b);
//
//   let l = 0;
//   let r = 0;
//   let len = nums.length;
//   let res = 0;
//
//   while (r < len) {
//     while (r < len && nums[r] - nums[l] <= 2 * k) {
//       r++;
//     }
//     res = Math.max(r - l, res);
//     l++;
//   }
//
//   return res;
// }

function lower_bound(nums: number[], l: number, r: number, target: number): number {
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
}

// function lower_bound(nums: number[], target: number): number {
//   let l = 0;
//   let r = nums.length;
//
//   while (l < r) {
//     const mid = Math.floor((l + r) / 2);
//     if (nums[mid] < target) {
//       l = mid + 1;
//     } else {
//       r = mid;
//     }
//   }
//   return l;
// }

function maximumBeauty(nums: number[], k: number) {
  nums.sort((a, b) => a - b);

  let res = 0;
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    const target = nums[i] + 2 * k;
    const j = lower_bound(nums, i, len, target + 1);

    res = Math.max(res, j - i);
  }

  return res;
}

const nums1 = [4, 6, 1, 2];
const k1 = 2;
console.log(maximumBeauty(nums1, k1));
const nums2 = [1, 1, 1, 1];
const k2 = 10;
console.log(maximumBeauty(nums2, k2));
const nums3 = [5, 57, 46];
const k3 = 15;
console.log(maximumBeauty(nums3, k3));

export { maximumBeauty };
