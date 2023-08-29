function getMode(map: Map<number, number>) {
  let res = 0;

  map.forEach((v) => {
    res = Math.max(res, v);
  });

  return res;
}

function longestEqualSubarray(nums: number[], k: number): number {
  let l = 0;
  let res = 0;
  const len = nums.length;
  const numsMap = new Map();

  for (let r = 0; r < len; r++) {
    let mode = getMode(numsMap);

    if (mode + k < r - l) {
      const cnt = numsMap.get(nums[l]);
      numsMap.set(nums[l], cnt - 1);
      l++;
    }
    if (numsMap.has(nums[r])) {
      const cnt = numsMap.get(nums[r]);
      numsMap.set(nums[r], cnt + 1);
    } else {
      numsMap.set(nums[r], 1);
    }
    mode = getMode(numsMap);
    console.log(l, r, mode);
    res = Math.max(res, mode);
  }

  return res;
}

const nums1 = [1, 3, 2, 3, 1, 3];
const k1 = 3;
console.log(longestEqualSubarray(nums1, k1));
const nums2 = [1, 1, 2, 2, 1, 1];
const k2 = 2;
console.log(longestEqualSubarray(nums2, k2));
const nums3 = [3, 2, 1, 4, 1];
const k3 = 0;
console.log(longestEqualSubarray(nums3, k3));
