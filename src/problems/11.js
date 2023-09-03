import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

let arr = null;

rl.on("line", (line) => {
  const len = line.length;
  arr = line
    .slice(1, len - 1)
    .split(",")
    .map((s) => parseInt(s));
});

rl.on("close", () => {
  console.log(maxArea(arr));
});

/**
 * @param {number, number} posA
 * @param {number, number} posB
 * @return {number}
 */
function getCapcity(posA, posB) {
  const dx = Math.abs(posA[0] - posB[0]);
  const dy = Math.min(posA[1], posB[1]);
  return dx * dy;
}

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const len = height.length;
  let cur_max = 0;

  for (let i = 0, j = len - 1; i < j; ) {
    const val = getCapcity([i, height[i]], [j, height[j]]);
    if (val > cur_max) cur_max = val;

    if (height[i] > height[j]) j--;
    else i++;
  }
  return cur_max;
};
