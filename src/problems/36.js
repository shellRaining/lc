/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const row = board.length;
  const col = board[0].length;

  // @type {Set[]}
  const rs = [];
  // @type {Set[]}
  const cs = [];
  // @type {Set[]}
  const bs = [];

  // make rs
  for (let i = 0; i < row; i++) {
    rs[i] = new Set();
    for (let j = 0; j < col; j++) {
      const item = board[i][j];
      if (item != '.') {
        if (rs[i].has(item)) return false;
        rs[i].add(item);
      }
    }
  }

  // make cs
  for (let i = 0; i < col; i++) {
    cs[i] = new Set();
    for (let j = 0; j < row; j++) {
      const item = board[j][i];
      if (item != '.') {
        if (cs[i].has(item)) return false;
        cs[i].add(item);
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const item = board[i][j];
      const idx = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      if (bs[idx] == null) {
        bs[idx] = new Set();
      }
      if (item != '.') {
        if (bs[idx].has(item)) return false;
        bs[idx].add(item);
      }
    }
  }

  return true;
};

const board = [
  ['3', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
const res = isValidSudoku(board);
console.log(res);
