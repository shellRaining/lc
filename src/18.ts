function fourSum(nums: number[], target: number): number[][] {
  const len = nums.length;
  const res: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    if (nums[i] == nums[i - 1]) continue;

    for (let j = i + 1; j < len; j++) {
      if (nums[j] == nums[j - 1] && j - 1 > i) continue;

      for (let l = j + 1, r = len - 1; l < r; ) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum == target) {
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          while (nums[l] == nums[l + 1] && l < r) l++;
          while (nums[r] == nums[r - 1] && l < r) r--;
          l++;
          r--;
        } else if (sum < target) l++;
        else r--;
      }
    }
  }

  return res;
}

export { fourSum };
