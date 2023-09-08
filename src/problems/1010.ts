function numPairsDivisibleBy60(time: number[]): number {
  const num_cnt_map = new Map([...Array(60)].map((_, i) => [i, 0]));

  time.forEach((v) => {
    const remain = v % 60;
    num_cnt_map.set(remain, (num_cnt_map.get(remain) ?? 0) + 1);
  });

  let res = 0;
  for (let i = 1; i < 30; i++) {
    res += num_cnt_map.get(i) * num_cnt_map.get(60 - i);
  }

  const t0 = num_cnt_map.get(0);
  const t30 = num_cnt_map.get(30);
  res += Math.floor((t0 * (t0 - 1)) / 2 + ((t30 - 1) * t30) / 2);

  return res;
}

const time1 = [30, 20, 150, 100, 40];
console.log(numPairsDivisibleBy60(time1));
const time2 = [60, 60, 60];
console.log(numPairsDivisibleBy60(time2));

export { numPairsDivisibleBy60 };
