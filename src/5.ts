function longestPalindrome(s: string): string {
  const len = s.length;
  function helper(midl: number, midr: number): string {
    while (midl >= 0 && midr < len && s[midl] == s[midr]) {
      midl--;
      midr++;
    }
    return s.substring(midl + 1, midr);
  }

  let res: string = '';
  for (let i = 0; i < len; i++) {
    const s1 = helper(i, i);
    const s2 = helper(i, i + 1);
    if (s1.length > res.length) {
      res = s1;
    }
    if (s2.length > res.length) {
      res = s2;
    }
  }
  return res;
}

const s1 = 'babad';
console.log(longestPalindrome(s1));
const s2 = 'cbbd';
console.log(longestPalindrome(s2));
const s3 = 'a';
console.log(longestPalindrome(s3));
const s4 = 'ac';
console.log(longestPalindrome(s4));

export { longestPalindrome };
