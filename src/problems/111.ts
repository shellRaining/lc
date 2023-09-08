import { TreeNode } from '../lib/tree.ts';

function minDepth(root: TreeNode | null): number {
  if (root == null) return 0;

  const q = [root];
  let res = 1;

  while (q.length) {
    const len = q.length;
    for (let i = 0; i < len; i++) {
      const node = q.shift();
      if (!node.left && !node.right) return res;
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    res++;
  }
}

const root1 = TreeNode.fromArray([3, 9, 20, null, null, 15, 7]);
console.log(minDepth(root1));
const root2 = TreeNode.fromArray([2, null, 3, null, 4, null, 5, null, 6]);
console.log(minDepth(root2));
