import * as readline from 'node:readline';
import process from 'node:process';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
const arr1 = [];

rl.on('line', (line) => {
  if (n === 0) {
    n = parseInt(line);
  } else {
    arr1.push(...line.split(' ').map(Number));
    if (arr1.length === n) {
      rl.close();
    }
  }
});

rl.on('close', () => {
  const len = arr1.length;
  const arr2 = new Array(len).fill(-1);

  let abef = -1;
  let anow: number;
  let bbef = Number.MAX_SAFE_INTEGER;
  let bnow: number;
  for (let i = 0; i < len - 1; i++) {
    arr2[i] = arr1[i + 1] - arr1[i];
    anow = arr1[i]
    bnow = arr2[i]
    if (abef >= anow || bbef <= bnow) {
      console.log('No');
      return;
    }
    abef = anow;
    bbef = bnow;
  }
  if (arr1[len - 1] <= arr1[len - 2]) {
    console.log('No');
    return;
  }
  console.log('Yes');
});
