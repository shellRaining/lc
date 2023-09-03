function finalString(s: string): string {
  const len = s.length;
  let res = '';

  for (const c of s) {
    if (c == 'i') {
      res = Array.from(res).reverse().join('');
    } else {
      res += c;
    }
  }

  return res;
}

const s1 = 'string';
console.log(finalString(s1));
const s2 = 'poiinter';
console.log(finalString(s2));

export { finalString };
