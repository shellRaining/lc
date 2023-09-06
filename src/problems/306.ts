function isAdditiveNumber(num: string): boolean {
  const len = num.length;
  let res = [];
  let path = [];

  function inner(idx: number) {
    if (idx == len) {
      res.push(path.slice());
      return;
    }

    for (let i = idx; i < len; i++) {
      const top = path.length;
      const s = num.slice(idx, i + 1);
      if (s[0] == '0' && s.length > 1) continue;
      const n = parseInt(num.slice(idx, i + 1));
      const sum = path[top - 1] + path[top - 2];
      if (n < sum) {
        continue;
      } else if (n == sum) {
        path.push(n);
        inner(i + 1);
        path.pop();
      } else {
        return;
      }
    }
  }

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      const s1 = num.slice(0, j + 1);
      const s2 = num.slice(j + 1, i + 1);
      if (s1[0] == '0' && s1.length > 1) continue;
      if (s2[0] == '0' && s2.length > 1) continue;
      const n1 = parseInt(s1);
      const n2 = parseInt(s2);
      path = [n1, n2];
      inner(i + 1);
    }
  }
  res = res.filter((arr) => arr.length > 2);
  return res.length != 0;
}

const s1 = '112358';
console.log(isAdditiveNumber(s1));
const s2 = '199100199';
console.log(isAdditiveNumber(s2));
const s3 = '1203';
console.log(isAdditiveNumber(s3));
