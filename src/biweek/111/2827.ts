function numberOfBeautifulIntegers(low: number, high: number, k: number): number {
  const p1 = low.toString().length;
  const p2 = high.toString().length;
  const arr: number[] = [];
  let s: string[] = [];

  function inner(odd_cnt: number, idx: number) {
    if (idx == 0) {
      if (s[0] == '0' || odd_cnt != 0) return;
      const num = parseInt(s.join(''), 10);
      if (num % k == 0) arr.push(num);
      return;
    }
    if (odd_cnt != 0) {
      for (let i = 1; i < 10; i += 2) {
        s.push(i.toString());
        inner(odd_cnt - 1, idx - 1);
        s.pop();
      }
    }
    for (let i = 0; i < 10; i += 2) {
      s.push(i.toString());
      inner(odd_cnt, idx - 1);
      s.pop();
    }
  }

  for (let i = p1; i <= p2; i++) {
    if (i % 2 != 0) {
      continue;
    }
    inner(i / 2, i);
  }

  let res = 0;
  arr.filter((v) => {
    if (v < low || v > high) return false;
    res++;
    return true;
  });

  return res;
}

const low1 = 10;
const high1 = 20;
const k1 = 3;
console.log(numberOfBeautifulIntegers(low1, high1, k1));

const low2 = 1;
const high2 = 10;
const k2 = 1;
console.log(numberOfBeautifulIntegers(low2, high2, k2));

const low3 = 5;
const high3 = 5;
const k3 = 2;
console.log(numberOfBeautifulIntegers(low3, high3, k3));

const low4 = 48147857;
const high4 = 83423418;
const k4 = 8;
console.log(numberOfBeautifulIntegers(low4, high4, k4));

export { numberOfBeautifulIntegers };
