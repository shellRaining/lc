/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const len1 = haystack.length;
  const len2 = needle.length;

  let i = 0;
  let j = 0;
  while (i < len1 && j < len2) {
    while (haystack[i] == needle[j]) {
      i++;
      j++;
      if (i >= len1 || j >= len2) {
        break;
      }
    }
    if (j != len2) {
      i = i - j + 1;
      j = 0;
    }
  }
  if (j != len2) return -1;
  return i - j;
};

const haystack = 'leetcodeleo';
const needle = 'leo';
console.log(strStr(haystack, needle));
