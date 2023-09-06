function letterCasePermutation(s: string): string[] {
  const len = s.length;
  const res = [];
  const path = [...s];

  function helper(idx: number) {
    if (idx == len) {
      res.push(path.join(''));
      return;
    }

    if (s[idx] > '9' || s[idx] < '0') {
      let c = path[idx];
      helper(idx + 1);
      path[idx] = c == c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
      helper(idx + 1);
    } else {
      helper(idx + 1);
    }
  }

  helper(0);
  return res;
}

const s1 = 'a1b2';
console.log(letterCasePermutation(s1));
const s2 = '3z4';
console.log(letterCasePermutation(s2));
