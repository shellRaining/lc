/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function sr(nums, target, l, r) {
  if (l == r) {
    if (nums[l] == target) return [l, r];
    else return [-1, -1];
  }

  const mid = Math.floor((l + r) / 2);
  if (l == mid) {
    if (nums[l] == target && nums[r] == target) return [l, r];
    else if (nums[l] == target && nums[r] != target) return [l, l];
    else if (nums[l] != target && nums[r] == target) return [r, r];
    else return [-1, -1];
  }

  if (nums[mid] == target) {
    let r1 = sr(nums, target, l, mid);
    let r2 = sr(nums, target, mid, r);
    return [r1[0], r2[1]];
  } else {
    if (nums[mid] < target) {
      return sr(nums, target, mid + 1, r);
    } else {
      return sr(nums, target, l, mid - 1);
    }
  }
}

var searchRange = function (nums, target) {
  const len = nums.length;
  if (len == 0) return [-1, -1];
  return sr(nums, target, 0, len - 1);
};

const nums = [];
const target = 6;

const res = searchRange(nums, target);
console.log(res);
