// function backspaceCompare(s: string, t: string): boolean {
//   function helper(arr: string[]): string {
//     const len = arr.length;
//     let l = 0;
//     let r = 0;
//
//     while (r < len) {
//       const rv = arr[r];
//       if (rv != '#') {
//         arr[l] = rv;
//         l++;
//       } else {
//         l = l - 1 < 0 ? 0 : l - 1;
//       }
//       r++;
//     }
//     return arr.slice(0, l).join('');
//   }
//
//   const sa = Array.from(s);
//   const ta = Array.from(t);
//   const rs1 = helper(sa);
//   const rs2 = helper(ta);
//   console.log(rs1, rs2);
//
//   return rs1 == rs2;
// }

function backspaceCompare(s: string, t: string): boolean {
  let p1 = s.length - 1;
  let p2 = t.length - 1;
  let cnt1 = 0;
  let cnt2 = 0;

  while (p1 >= 0 || p2 >= 0) {
    while (p1 >= 0) {
      if (s[p1] == '#') {
        cnt1++;
      } else if (cnt1) {
        cnt1--;
      } else {
        break;
      }
      p1--;
    }
    while (p2 >= 0) {
      if (t[p2] == '#') {
        cnt2++;
      } else if (cnt2) {
        cnt2--;
      } else {
        break;
      }
      p2--;
    }
    if (s[p1] != t[p2]) {
      return false;
    }
    p1--;
    p2--;
  }

  return true;
}

const s1 = 'ab#c';
const t1 = 'ac';
console.log(backspaceCompare(s1, t1));
const s2 = 'ab##';
const t2 = 'c#d#';
console.log(backspaceCompare(s2, t2));
const s3 = 'a##c';
const t3 = '#a#c';
console.log(backspaceCompare(s3, t3));
const s4 = 'a#c';
const t4 = 'b';
console.log(backspaceCompare(s4, t4));
const s5 = 'ac';
const t5 = '######ac';
console.log(backspaceCompare(s5, t5));

export { backspaceCompare };
