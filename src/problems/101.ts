import { TreeNode } from '../lib/tree.ts';

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;
  else if (!root.left && !root.right) return true;
  else if (!root.left && root.right) return false;
  else if (root.left && !root.right) return false;

  const lstk = [root.left];
  const rstk = [root.right];

  while (lstk.length && rstk.length) {
    const l = lstk.shift();
    const r = rstk.shift();
    if (!l && !r) continue;
    else if ((!l && r) || (l && !r) || l.val != r.val) return false;
    lstk.push(l.left, l.right);
    rstk.push(r.right, r.left);
  }

  return true;
}

const root1 = TreeNode.fromArray([1, 2, 2, 3, 4, 4, 3]);
console.log(isSymmetric(root1));
const root2 = TreeNode.fromArray([1, 2, 2, null, 3, null, 3]);
console.log(isSymmetric(root2));
