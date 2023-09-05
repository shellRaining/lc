import * as readline from 'node:readline';
import process from 'node:process';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
const numbers = [];

rl.on('line', (line) => {
  if (n === 0) {
    n = parseInt(line);
  } else {
    numbers.push(...line.split(' ').map(Number));
    if (numbers.length === n) {
      rl.close();
    }
  }
});

rl.on('close', () => {
  let na = numbers.slice(1).sort((a, b) => a - b);
  let res = 0;
  let target = numbers[0];

  function findIdx(target: number): number {
    let l = 0;
    let r = na.length;

    while (l < r) {
      const mid = Math.floor((r + l) / 2);
      if (na[mid] <= target) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }

    return l;
  }

  let idx = findIdx(target);
  while (idx < na.length) {
    na = na.map((v) => Math.floor(v / 2));
    res++;
    idx = findIdx(target);
  }

  console.log(res);
  return;
});
