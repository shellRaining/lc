import * as readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });
let arr = [];

rl.on("line", (line) => {
  arr = line.split(",").map((s) => parseInt(s));
  const res = search(arr, 0);
  console.log(res);
});

rl.on("SIGINT", () => {
  rl.close();
  console.log("exit");
});

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const len = nums.length;
  let l = 0;
  let r = len - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (nums[mid] == target) {
      return mid;
    }
    if (l == r) {
      return -1;
    }
    if (l == mid) {
      if (nums[r] != target) {
        return -1;
      } else {
        return r;
      }
    }

    if (nums[l] < nums[mid]) {
      if (nums[l] <= target && target <= nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else if (nums[mid] < nums[r]) {
      if (nums[mid] <= target && target <= nums[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }

  return -1;
};
