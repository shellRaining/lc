import * as readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });
let arr = [];

rl.on("line", (line) => {
  arr = line.split(",").map((s) => parseInt(s));
});

rl.on("close", () => {
  nextPermutation(arr);
  console.log(arr);
});

/**
 * @param {number[]} nums
 * @return {void} do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const len = nums.length;
  if (len == 1) return;

  let i = len - 2;
  let j = len - 1;
  let k = len - 1;

  while (i >= 0 && nums[i] >= nums[j]) {
    i--;
    j--;
  }

  if (i >= 0) {
    while (nums[i] >= nums[k]) {
      k--;
    }
    [nums[i], nums[k]] = [nums[k], nums[i]];
  }

  for (i = j, j = len - 1; i < j; ) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }
};

