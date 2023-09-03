function solveSudoku(board: string[][]): void {
  const len = board.length;

  function canPlace(idx: number, num: number) {
    const x = Math.floor(idx / len);
    const y = idx % len;

    // check row and col
    for (let i = 0; i < len; i++) {
      if (board[x][i] == num.toString() || board[i][y] == num.toString()) return false;
    }

    // check block
    const blockX = Math.floor(x / 3) * 3;
    const blockY = Math.floor(y / 3) * 3;
    for (let i = blockX; i < blockX + 3; i++) {
      for (let j = blockY; j < blockY + 3; j++) {
        if (board[i][j] == num.toString()) return false;
      }
    }

    return true;
  }

  function inner(idx: number) {
    if (idx >= len * len) return true;

    const x = Math.floor(idx / len);
    const y = idx % len;

    if (board[x][y] != '.') return inner(idx + 1);

    for (let i = 1; i <= 9; i++) {
      if (canPlace(idx, i)) {
        board[x][y] = i.toString();
        if (inner(idx + 1)) return true;
        board[x][y] = '.';
      }
    }

    return false;
  }

  inner(0);
  return;
}

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

solveSudoku(board);
console.log(board);

export { solveSudoku };
