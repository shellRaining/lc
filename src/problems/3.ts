function lengthOfLongestSubstring(s: string): number {
  const alpha_set = new Set();
  let l = 0;
  let r = 0;
  let res = 0;
  while (r < s.length) {
    if (alpha_set.has(s[r])) {
      alpha_set.delete(s[l]);
      l++;
    } else {
      alpha_set.add(s[r]);
      r++;
      res = Math.max(res, alpha_set.size);
    }
  }

  return res;
}

const s1 = 'abcabcbb';
console.log(lengthOfLongestSubstring(s1));
const s2 = 'bbbbb';
console.log(lengthOfLongestSubstring(s2));
const s3 = 'pwwkew';
console.log(lengthOfLongestSubstring(s3));

export { lengthOfLongestSubstring };
