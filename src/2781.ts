function longestValidSubstring(word: string, forbidden: string[]): number {
  // 1. set substring
  // 2. whether substring contained forbidden
  const len = word.length;
  let l = 0;
  let res = 0;
  const forbidden_set = new Set(forbidden);

  for (let r = 0; r < len; r++) {
    for (let cur = r; r - cur < 10 && cur >= l; cur--) {
      const substring = word.slice(cur, r + 1);
      if (forbidden_set.has(substring)) {
        l = cur + 1;
        break;
      }
    }

    res = Math.max(res, r - l + 1);
  }

  return res;
}

const word1 = 'cbaaaabc';
const forbidden1 = ['aaa', 'cb'];
console.log(longestValidSubstring(word1, forbidden1));

const word2 = 'leetcode';
const forbidden2 = ['de', 'le', 'e'];
console.log(longestValidSubstring(word2, forbidden2));

export { longestValidSubstring };
