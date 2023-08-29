function minimumSum(n: number, k: number): number {
  const arr = new Array(k + 1).fill(false);
  const res = [];

  for (let i = 1; i < k && res.length < n; i++) {
    if (arr[i]) continue;
    arr[i] = true;
    arr[k - i] = true;
    res.push(i);
  }
  let sum = 0;
  for (let i = 0; i < res.length; i++) {
    sum += res[i];
  }
  for (let i = 0; i < n - res.length; i++) {
    sum += k + i;
  }

  return sum;
}

const n1 = 5;
const k1 = 4;
console.log(minimumSum(n1, k1));
const n2 = 2;
const k2 = 6;
console.log(minimumSum(n2, k2));

export { minimumSum };
