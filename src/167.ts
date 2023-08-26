function twoSum(numbers: number[], target: number): number[] {
  const len = numbers.length;
  let l = 0;
  let r = len - 1;
  while (l < r) {
    const lv = numbers[l];
    const rv = numbers[r];
    if (lv + rv < target) l++;
    else if (lv + rv > target) r--;
    else return [l + 1, r + 1];
  }
  return [0, 0];
}

const numbers1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(numbers1, target1));
const numbers2 = [2, 3, 4];
const target2 = 6;
console.log(twoSum(numbers2, target2));
const numbers3 = [-1, 0];
const target3 = -1;
console.log(twoSum(numbers3, target3));

export { twoSum };
