function canSplitArray(nums: number[], m: number): boolean {
  const len = nums.length;
  const dp: number[][] = [];
  const cache: boolean[][] = Array.from({ length: len }, () => {
    return Array.from({ length: len }, undefined);
  });

  for (let i = 0; i < len; i++) {
    dp[i] = [];
    dp[i][i] = nums[i];
    for (let j = i + 1; j < len; j++) {
      dp[i][j] = dp[i][j - 1] + nums[j];
    }
  }

  function inner(l: number, r: number): boolean {
    const range = r - l;
    if (range == 2 || range == 1) {
      cache[l][r - 1] = true;
      return true;
    }

    for (let i = l + 1; i < r; i++) {
      const lsum = dp[l][i - 1];
      const rsum = dp[i][r - 1];
      if (i - l != 1 && lsum < m) continue;
      if (r - i != 1 && rsum < m) continue;

      const lres = cache[l][i - 1] ?? inner(l, i);
      const rres = cache[i][r - 1] ?? inner(i, r);

      if (lres && rres) {
        cache[l][r - 1] = true;
        return true;
      }
    }

    cache[l][r - 1] = false;
    return false;
  }

  return inner(0, len);
}

const nums1 = [2, 2, 1];
const m1 = 4;
console.log(canSplitArray(nums1, m1));
const nums2 = [2, 1, 3];
const m2 = 5;
console.log(canSplitArray(nums2, m2));
const nums3 = [2, 3, 3, 2, 3];
const m3 = 6;
console.log(canSplitArray(nums3, m3));
const nums4 = [
  16, 44, 34, 15, 36, 7, 47, 2, 36, 3, 11, 22, 23, 27, 19, 25, 22, 12, 11, 12, 24, 21, 24, 19, 9,
];
const m4 = 60;
console.log(canSplitArray(nums4, m4));

export { canSplitArray };
