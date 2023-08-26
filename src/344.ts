/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  const len = s.length;
  let l = 0;
  let r = len - 1;
  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++;
    r--;
  }
}

const s1 = ['h', 'e', 'l', 'l', 'o'];
reverseString(s1);
console.log(s1); // ["o", "l", "l", "e", "h"]
const s2 = ['H', 'a', 'n', 'n', 'a', 'h'];
reverseString(s2);
console.log(s2); // ["h", "a", "n", "n", "a", "H"]

export { reverseString };
