import * as readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });
let arr = [];

rl.on("line", (line) => {
  arr = line.split(",").map((s) => parseInt(s));
});

rl.on("close", () => {
  const res = threeSum(arr);
  console.log(res);
});

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const len = nums.length;
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) continue;
    if (nums[i] == nums[i - 1]) continue;
    for (let l = i + 1, r = len - 1; l < r; ) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum == 0) {
        while (nums[l] == nums[l + 1]) {
          l++;
        }
        while (nums[r] == nums[r - 1]) {
          r--;
        }
        res.push([nums[i], nums[l], nums[r]]);
        l++;
        r--;
      } else if (sum < 0) l++;
      else r--;
    }
  }
  return res;
};
