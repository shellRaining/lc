/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  const len = Math.floor(Math.sqrt(c));
  // const nums = Array.from({ length: len + 1 });
  let i = 0;
  let j = len;

  while (i <= j) {
    const sum = i * i + j * j;
    if (sum < c) {
      i++;
    } else if (sum > c) {
      j--;
    } else {
      return true;
    }
  }
  getTsBuildInfoEmitOutputFilePath

  return false;
}
