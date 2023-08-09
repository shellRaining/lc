// TODO: error
function change(amount: number, coins: number[]): number {
  // const cache = new Array(amount + 1).fill(-1);
  // cache[0] = 0;

  function dfs(a: number, c: number): number {
    // special case
    // if (cache[a] != -1) return cache[a];
    if (a <= 0) return 0;

    // search
    let sum = 0;
    for (const coin of coins) {
      if (coin < c) continue;
      if (a - coin == 0) {
        sum++;
      } else {
        sum += dfs(a - coin, coin);
      }
    }

    return sum;
  }

  return dfs(amount, 0);
}

const amount1 = 5;
const coins1 = [1, 2, 5];
console.log(change(amount1, coins1));
const amount2 = 3;
const coins2 = [2];
console.log(change(amount2, coins2));
const amount3 = 10;
const coins3 = [10];
console.log(change(amount3, coins3));

export { change };
