import * as readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });
let arr = [];

rl.on("line", (line) => {
  arr = line.split(",").map((s) => parseInt(s));
});

rl.on("close", () => {
  const res = removeDuplicates(arr);
  console.log(res);
});

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const len = nums.length;
  let cur_max = nums[0];
  let cur_len = 1;
  for (let i = 1; i < len; i++) {
    while (nums[i] <= cur_max) {
      i++;
      if (i >= len) return cur_len;
    }
    let tmp = nums[cur_len];
    nums[cur_len] = nums[i];
    nums[i] = tmp;
    cur_max = nums[cur_len];
    cur_len++;
  }

  return cur_len;
};
