function isAcronym(words: string[], s: string): boolean {
  let res = '';
  words.forEach((v) => {
    res += v[0];
  });
  return s == res;
}

const words = ['alice', 'bob', 'charlie'];
const s = 'abc';
console.log(isAcronym(words, s));
const words2 = ['an', 'apple'];
const s2 = 'a';
console.log(isAcronym(words2, s2));

export { isAcronym };
