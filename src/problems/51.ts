function solveNQueens(n: number): string[][] {
  const res: string[][] = [];
  // const track: string[][] = Array.from({ length: n }).fill(Array.from({ length: n }).fill('.'));
  const track: string[][] = Array.from({ length: n }, () => Array.from({ length: n }, () => '.'));

  function canPlaced(row: number, col: number) {
    // check row and col
    for (let i = 0; i < n; i++) {
      if (track[i][col] == 'Q' || track[row][i] == 'Q') {
        return false;
      }
    }

    // check left top
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (track[i][j] == 'Q') {
        return false;
      }
    }

    // check right top
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (track[i][j] == 'Q') {
        return false;
      }
    }

    return true;
  }

  function inner(track: string[][], row: number) {
    if (row == n) {
      res.push(track.map((item) => item.join('')));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (!canPlaced(row, col)) {
        continue;
      }

      track[row][col] = 'Q';
      inner(track, row + 1);
      track[row][col] = '.';
    }
  }

  inner(track, 0);
  return res;
}

let n = 4;
console.log(solveNQueens(n));

export { solveNQueens };
