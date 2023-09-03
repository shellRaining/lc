function combinationSum2(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  const track: number[] = [];

  function inner(idx: number, curSum: number) {
    if (curSum == target) {
      res.push(track.slice());
      return;
    } else if (curSum > target) return;

    for (let i = idx; i < candidates.length; i++) {
      if (candidates[i] == candidates[i - 1] && i > idx) {
        continue;
      }
      const item = candidates[i];
      track.push(item);
      inner(i + 1, curSum + item);
      track.pop();
    }
  }

  candidates.sort((a, b) => a - b);
  inner(0, 0);
  return res;
}

const candidates = [1, 1, 1];
const target = 3;
console.log(combinationSum2(candidates, target));

export { combinationSum2 };
