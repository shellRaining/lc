function findMaximumElegance(items: number[][], k: number): number {
  const len = items.length;
  const cate_map: number[][][] = Array.from({ length: len + 1 }, () => []);

  let cate_sum = 0;

  for (const [idx, [profit, cate]] of items.entries()) {
    cate_map[cate].push([idx, profit]);
    cate_sum++;
  }
  for (const cateItems of cate_map) {
    cateItems.sort((a, b) => b[1] - a[1]);
  }
  const sum = 0;
  for (let i = 0; i < Math.min(cate_sum, k); i++) {}

  return 0;
}
const items1 = [
  [3, 2],
  [5, 1],
  [10, 1],
];
const k1 = 2;
console.log(findMaximumElegance(items1, k1));
const items2 = [
  [3, 1],
  [3, 1],
  [2, 2],
  [5, 3],
];
const k2 = 3;
console.log(findMaximumElegance(items2, k2));
const items3 = [
  [1, 1],
  [2, 1],
  [3, 1],
];
const k3 = 3;
console.log(findMaximumElegance(items3, k3));
