function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  const track: number[] = [];

  function inner(idx: number, cur_sum: number) {
    if (cur_sum == target) {
      res.push(track.slice());
      return;
    } else if (cur_sum > target) return;

    for (let i = idx; i < candidates.length; i++) {
      const item = candidates[i];
      track.push(item);
      inner(i, cur_sum + item);
      track.pop();
    }
  }

  inner(0, 0);

  return res;
}

const candidates = [2];
const target = 3;
console.log(combinationSum(candidates, target));

export { combinationSum };
