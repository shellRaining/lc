import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * @param {number[]} time
 * @return {number}
 */
function numPairsDivisibleBy60(time) {
  let cnt = 0;
  for (let i = 0; i < time.length; i++) {
    for (let j = i + 1; j < time.length; j++) {
      if ((time[i] + time[j]) % 60 === 0) {
        cnt++;
      }
    }
  }

  return cnt;
}

rl.on('line', (line) => {
  const arr = line.split(' ').map((el) => parseInt(el));
  console.log(numPairsDivisibleBy60(arr));
});
