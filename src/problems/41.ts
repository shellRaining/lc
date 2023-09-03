function firstMissingPositive(nums: number[]): number {
  const len = nums.length;
  let cur = 0;

  for (let i = 0; i < len; i++) {
    const item = nums[i];
    if (item < len && item > 0) {
      nums[cur++] = item;
    }
  }

  return 1;
}

const nums = [1, 2, 0];
console.log(firstMissingPositive(nums));

export { firstMissingPositive };
