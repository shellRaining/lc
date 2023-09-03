/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
  function contained(item) {
    const len1 = s.length;
    const len2 = item.length;
    let i = 0;
    let j = 0;

    while (i < len1 && j < len2) {
      while (s[i] != item[j]) {
        i++;
        if (i >= len1) {
          return false;
        }
      }
      i++;
      j++;
    }
    if (j != len2) return false;
    else return true;
  }

  let max_len = 0;
  let p = "";
  for (let i = 0; i < dictionary.length; i++) {
    const item = dictionary[i];
    if (contained(item)) {
      const len = item.length;
      if (max_len == len) {
        if (p > item) {
          p = item;
        }
      } else if (max_len < len) {
        max_len = len;
        p = item;
      }
    }
  }

  return p;
};

const s = "abpcplea";
const dictionary = ["a", "b", "c"];
const res = findLongestWord(s, dictionary);
console.log(res);
