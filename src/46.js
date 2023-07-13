/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  const track = [];
  const len = nums.length;
  const choices = new Array(len).fill(false);

  /**
   * @param {number[]} track
   * @param {number[]} choices
   */
  function inner(track, choices) {
    if (track.length == nums.length) {
      res.push(track.slice());
    }

    for (let i = 0; i < len; i++) {
      const item = nums[i];
      if (choices[i]) continue;

      choices[i] = true;
      track.push(item);
      inner(track, choices);
      track.pop();
      choices[i] = false;
    }
  }

  inner(track, choices);

  return res;
};

const nums = [1, 2, 10];
const res = permute(nums);
console.log(res);
