function partition(s: string): string[][] {
  const len = s.length;
  const arr = [];
  const res = [];

  function helper(idx: number) {
    if (idx == len) {
      res.push(arr.slice());
      return;
    }

    for (let i = idx; i < len; i++) {
      const substring = s.slice(idx, i + 1);
      const reverse = [...substring].reverse().join('');
      if (reverse == substring) {
        arr.push(substring);
        helper(i + 1);
        arr.pop();
      }
    }
  }

  helper(0);
  return res;
}

const s1 = 'aab';
console.log(partition(s1));
const s2 = 'a';
console.log(partition(s2));
