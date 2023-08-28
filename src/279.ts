// function numSquares(n: number): number {
//   const choice: number[] = [];
//   for (let i = 1; i * i <= n; i++) {
//     choice.push(i * i);
//   }
//   const dp = Array.from({ length: n + 1 }, () => {
//     return n + 1;
//   });
//   dp[0] = 0;
//
//   for (let i = 0; i <= n; i++) {
//     for (let j = 0; j < choice.length; j++) {
//       if (i - choice[j] < 0) continue;
//       dp[i] = Math.min(dp[i], dp[i - choice[j]] + 1);
//     }
//   }
//
//   return dp[n];
// }

function numSquares(n: number): number {
  const dp = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = 1; j * j <= i; j++) {
      min = Math.min(min, dp[i - j * j]);
    }
    dp[i] = min + 1;
  }

  return dp[n];
}

const n = 12;
console.log(numSquares(n));
const n1 = 13;
console.log(numSquares(n1));

export { numSquares };
