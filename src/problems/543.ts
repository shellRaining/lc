import { TreeNode } from '../lib/tree.ts';

function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = 0;

  function maxDepth(root: TreeNode | null) {
    if (root == null) return 0;

    const ld = maxDepth(root.left);
    const rd = maxDepth(root.right);

    max = Math.max(max, ld + rd);

    return Math.max(ld, rd) + 1;
  }

  maxDepth(root);

  return max;
}

const root1 = TreeNode.fromArray([1, 2, 3, 4, 5]);
console.log(diameterOfBinaryTree(root1));
const root2 = TreeNode.fromArray([1, 2]);
console.log(diameterOfBinaryTree(root2));

export { diameterOfBinaryTree };
