import { TreeNode } from '../lib/tree.ts';
function levelOrderBottom(root: TreeNode | null): number[][] {
  if (root == null) return [];

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

    res.push(tmp);
    tmp = [];
  }

  return res.reverse();
}

const root1 = TreeNode.fromArray([3, 9, 20, null, null, 15, 7]);
console.log(levelOrderBottom(root1));
const root2 = TreeNode.fromArray([1]);
console.log(levelOrderBottom(root2));
const root3 = TreeNode.fromArray([]);
console.log(levelOrderBottom(root3));
