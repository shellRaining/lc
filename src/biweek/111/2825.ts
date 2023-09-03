function canMakeSubsequence(str1: string, str2: string): boolean {
  const len1 = str1.length;
  const len2 = str2.length;
  if (len1 < len2) return false;

  let p1 = 0;
  let p2 = 0;
  while (p1 < len1 && p2 < len2) {
    const c1 = str1[p1].charCodeAt(0);
    const c2 = str2[p2].charCodeAt(0);
    if (c1 == c2 || c2 - c1 == 1 || c2 - c1 == -25) {
      p2++;
    }
    console.log(p1, p2);
    p1++;
  }
  return p2 == len2;
}
const s1 = 'abc';
const t1 = 'ad';
console.log(canMakeSubsequence(s1, t1));
const s2 = 'zc';
const t2 = 'ad';
console.log(canMakeSubsequence(s2, t2));
const s3 = 'ab';
const t3 = 'd';
console.log(canMakeSubsequence(s3, t3));
export { canMakeSubsequence };
