import { TreeNode } from '../lib/tree.ts';

function maxDepth(root: TreeNode | null): number {
  if (root == null) return 0;

  const dl = maxDepth(root.left);
  const dr = maxDepth(root.right);

  return Math.max(dl, dr) + 1;
}

const root1 = TreeNode.fromArray([3, 9, 20, null, null, 15, 7]);
console.log(maxDepth(root1));
const root2 = TreeNode.fromArray([1, null, 2]);
console.log(maxDepth(root2));

export { maxDepth };
