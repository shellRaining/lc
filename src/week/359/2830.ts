function maximizeTheProfit(n: number, offers: number[][]): number {
  const offersEndArr = Array.from({ length: n }, () => []);

  for (const offer of offers) {
    offersEndArr[offer[1]].push([offer[0], offer[2]]);
  }

  const dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1];
    for (const offer of offersEndArr[i - 1]) {
      dp[i] = Math.max(dp[i], dp[offer[0]] + offer[1]);
    }
  }

  return dp[n];
}

const n1 = 5;
const offers1 = [
  [0, 0, 1],
  [0, 2, 2],
  [1, 3, 2],
];
console.log(maximizeTheProfit(n1, offers1));
const n2 = 5;
const offers2 = [
  [0, 0, 1],
  [0, 2, 10],
  [1, 3, 2],
];
console.log(maximizeTheProfit(n2, offers2));

export { maximizeTheProfit };
