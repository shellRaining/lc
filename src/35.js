import * as readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });
let arr = [];

rl.on("line", (line) => {
  arr = line.split(",").map((s) => parseInt(s));
  const res = searchInsert(arr, 5);
  console.log(res);
});

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const len = nums.length;
  let i = 0;
  let j = len - 1;
  while (i <= j) {
    const mid = Math.floor((i + j) / 2);
    if (nums[mid] == target) return mid;

    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
};
