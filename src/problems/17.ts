function letterCombinations(digits: string): string[] {
  const map = new Map<string, string[]>([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']],
  ]);

  const res = [];
  const len = digits.length;
  let s = [];
  function inner(idx: number) {
    if (idx == len) {
      return s.length == 0 ? [] : res.push(s.join(''));
    }

    for (const c of map.get(digits[idx])) {
      s.push(c);
      inner(idx + 1);
      s.pop();
    }
  }

  inner(0);
  return res;
}

const digits1 = '23';
console.log(letterCombinations(digits1));
const digits2 = '';
console.log(letterCombinations(digits2));
const digits3 = '2';
console.log(letterCombinations(digits3));
