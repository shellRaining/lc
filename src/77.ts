function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  const track: number[] = [];

  function inner(idx: number) {
    if (track.length == k) {
      res.push(track.slice());
      return;
    }

    for (let i = idx; i <= n; i++) {
      track.push(i);
      inner(i + 1);
      track.pop();
    }
  }

  inner(1);
  return res;
}

export { combine };
