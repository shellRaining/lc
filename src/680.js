import * as readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

rl.on("line", (line) => {
  const res = validPalindrome(line);
  console.log(res);
});

/**
 * @param {string} s
 * @return {boolean}
 */
function v2(s) {
  const len = s.length;
  let l = 0;
  let r = len - 1;
  while (l <= r) {
    if (s[l] != s[r]) {
      return false;
    }
    l++;
    r--;
  }

  return true;
}

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  const len = s.length;
  let l = 0;
  let r = len - 1;

  while (l <= r) {
    if (s[l] != s[r]) {
      return v2(s.slice(l, r)) || v2(s.slice(l + 1, r + 1));
    }
    l++;
    r--;
  }
  return true;
};
