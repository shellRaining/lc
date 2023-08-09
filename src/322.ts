// TODO: error
function coinChange(coins: number[], amount: number): number {
  const cache = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
  function dfs(a: number): number {
    if (a < 0) return -1;
    else if (a == 0) return 0;
    if (cache[a] != Number.MAX_SAFE_INTEGER) return cache[a];

    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      if (a - coin < 0) continue;
      const sub = dfs(a - coin);
      min = Math.min(min, sub + 1);
    }
    cache[a] = min == Number.MAX_SAFE_INTEGER ? -1 : min;

    return cache[a];
  }

  return dfs(amount);
}

const coins1 = [1, 2, 5];
const amount1 = 11;
console.log(coinChange(coins1, amount1));
const coins2 = [2];
const amount2 = 3;
console.log(coinChange(coins2, amount2));
const coins3 = [1];
const amount3 = 0;
console.log(coinChange(coins3, amount3));

export { coinChange };
