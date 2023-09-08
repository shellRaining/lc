import { TreeNode } from '../lib/tree.ts';

function largestValues(root: TreeNode | null): number[] {
  if (root == null) return [];
  const res = [];
  const q = [root];

  while (q.length) {
    const len = q.length;
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < len; i++) {
      const node = q.shift();
      max = Math.max(max, node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    res.push(max);
  }
  return res;
}

const root1 = TreeNode.fromArray([1, 3, 2, 5, 3, null, 9]);
console.log(largestValues(root1));
const root2 = TreeNode.fromArray([1, 2, 3]);
console.log(largestValues(root2));
const root3 = TreeNode.fromArray([0, -1]);
console.log(largestValues(root3));
