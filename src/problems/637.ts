import { TreeNode } from '../lib/tree.ts';
function averageOfLevels(root: TreeNode | null): number[] {
  if (root == null) return [0];

  const q = [root];
  const res = [];
  let tmp = [];

  while (q.length) {
    const len = q.length;
    for (let i = 0; i < len; i++) {
      const node = q.shift();
      tmp.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    const sum = tmp.reduce((pre, cur) => pre + cur, 0);
    res.push(sum / tmp.length);
    tmp = [];
  }

  return res
}

const root1 = TreeNode.fromArray([3, 9, 20, null, null, 15, 7]);
console.log(averageOfLevels(root1));
const root2 = TreeNode.fromArray([3, 9, 20, 15, 7]);
console.log(averageOfLevels(root2));
