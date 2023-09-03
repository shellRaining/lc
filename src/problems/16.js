import * as readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

let arr = [];
rl.on("line", (line) => {
  arr = line.split(",").map((s) => parseInt(s));
});

rl.on("close", () => {
  const res = threeSumClosest(arr, 1);
  console.log(res);
});

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const len = nums.length;
  let min_sub = Number.MAX_SAFE_INTEGER;
  let res = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    for (let l = i + 1, r = len - 1; l < r; ) {
      const sum = nums[i] + nums[l] + nums[r];
      const sub = Math.abs(target - sum);
      if (sub < min_sub) {
        min_sub = sub;
        res = sum;
      }

      if (sum < target) {
        l++;
      } else if (sum > target) {
        r--;
      } else {
        return sum;
      }
    }
  }
  return res;
};
