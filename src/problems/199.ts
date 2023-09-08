import { TreeNode } from '../lib/tree.ts';

function rightSideView(root: TreeNode | null): number[] {
  if (root == null) return [];

  const q = [root];
  let tmp = [];
  const res: number[][] = [];

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

  return res.map((v) => v[v.length - 1]);
}

const root1 = TreeNode.fromArray([1, 2, 3, null, 5, null, 4]);
console.log(rightSideView(root1));
const root2 = TreeNode.fromArray([1, null, 3]);
console.log(rightSideView(root2));
const root3 = TreeNode.fromArray([]);
console.log(rightSideView(root3));

export { rightSideView };
