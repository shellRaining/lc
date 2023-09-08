function maximumRows(matrix: number[][], numSelect: number): number {
  let res = 0;
  const path = [];
  const row = matrix.length;
  const col = matrix[0].length;

  function suit() {
    let res = row;
    const fullPath = Array.from({ length: col }, (_, idx) => idx);
    const diffPath = fullPath.filter((v) => !path.includes(v));

    for (const arr of matrix) {
      if (diffPath.some((v) => arr[v] == 1)) res--;
    }

    return res;
  }

  function dfs(idx: number) {
    if (idx == col) {
      if (path.length == numSelect) {
        const subRes = suit();
        if (subRes > res) res = subRes;
      }
      return;
    }

    dfs(idx + 1);
    path.push(idx);
    dfs(idx + 1);
    path.pop();
  }

  dfs(0);
  return res;
}

const mat1 = [
  [0, 0, 0],
  [1, 0, 1],
  [0, 1, 1],
  [0, 0, 1],
];
console.log(maximumRows(mat1, 2));
const mat2 = [[1], [0]];
console.log(maximumRows(mat2, 1));
const mat3 = [
  [0, 0, 1],
  [1, 0, 0],
  [0, 0, 0],
];
console.log(maximumRows(mat3, 2));

export { maximumRows };
