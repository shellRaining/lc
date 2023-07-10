import * as readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });
let arr = [];

rl.on("line", (line) => {
  arr = line.split(",").map((s) => parseInt(s));
});

rl.on("close", () => {
  const res = fourSum(arr, 8);
  console.log(res);
});

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const len = nums.length;
  const res = [];

  nums.sort();
  for (let i = 0; i < len; i++) {
    if (nums[i] == nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < len; j++) {
      if (j - 1 != i && nums[j - 1] == nums[j]) {
        continue;
      }
      for (let l = j + 1, r = len - 1; l < r; ) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum < target) {
          l++;
        } else if (sum > target) {
          r--;
        } else {
          while (nums[l] == nums[l + 1]) l++;
          while (nums[r] == nums[r - 1]) r--;
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          l++;
          r--;
        }
      }
    }
  }

  return res;
};
