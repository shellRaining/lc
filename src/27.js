import * as readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });
let arr = [];

rl.on("line", (line) => {
  arr = line.split(",").map((s) => parseInt(s));
});

rl.on("close", () => {
  const res = removeElement(arr, 2);
  console.log(res);
});

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const len = nums.length;
  if (len == 0) {
    return 0;
  }

  let i = 0;
  let j = 0;
  while (true) {
    while (nums[i] != val) {
      i++;
      if (i >= len) return i;
    }
    j = Math.max(i, j);
    while (nums[j] == val) {
      j++;
      if (j >= len) {
        return i;
      }
    }

    let tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  }
};
