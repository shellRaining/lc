import * as readline from 'node:readline';
import process from 'node:process';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let d = 0;
const numbers = [];

rl.on('line', (line) => {
  if (n === 0) {
    [n, d] = [...line.split(' ').map(Number)];
  } else {
    numbers.push(...line.split(' ').map(Number));
    if (numbers.length === n) {
      rl.close();
    }
  }
});

rl.on('close', () => {
  let res = 0;
  const len = numbers.length;

  numbers.sort((a, b) => a - b);
  let arr = [numbers[0]];

  function helper(idx: number) {
    if (arr.length == n - d) {
      res++;
      return;
    }

    for (let i = idx + 1; i < len; i++) {
      if (numbers[i] % arr[arr.length - 1] == 0 && numbers[i] != arr[arr.length - 1]) {
        arr.push(numbers[i]);
        helper(i + 1);
        arr.pop();
      }
    }
  }

  for (const v of numbers) {
    arr = [v];
    helper(0);
  }

  res %= Math.pow(10, 9) + 7;
  console.log(res);
});
