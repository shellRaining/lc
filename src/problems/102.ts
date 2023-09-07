import { TreeNode } from '../lib/tree.ts';

function levelOrder(root: TreeNode | null): number[][] {
  if (root == null) return [];

  const q = [root];
  let tmp = [];
  const res = [];

  while (q.length) {
    const len = q.length
    for (let i = 0; i < len; i++) {
      const node = q.shift();
      tmp.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    res.push(tmp);
    tmp = [];
  }

  return res
}

const root1 = TreeNode.fromArray([3, 9, 20, null, null, 15, 7]);
console.log(levelOrder(root1));
const root2 = TreeNode.fromArray([1]);
console.log(levelOrder(root2));
const root3 = TreeNode.fromArray([]);
console.log(levelOrder(root3));
