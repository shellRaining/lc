import * as readline from 'node:readline';
import process from 'node:process';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cnt = 0;
let m = 0;
let n = 0;
const strList: string[] = [];

rl.on('line', (line) => {
  if (cnt == 0) {
    [m, n] = line.split('').map((v) => parseInt(v));
    cnt++;
  } else if (cnt <= m) {
    strList.push(line);
    cnt++;
  } else {
    rl.close();
  }
});

rl.on('close', () => {
  const target = 'meituan';
  const targetLen = target.length;
  const len = strList.length;

  let cur = 0;

  if (len < targetLen) {
    console.log('NO');
    return;
  }

  for (const s of strList) {
    if (s.includes(target[cur])) {
      cur++;
      if(cur >= targetLen) {
        console.log("YES");
        return
      }
    }
  }

  if (cur >= targetLen) {
    console.log('YES');
  } else {
    console.log('NO');
  }
  return;
});
