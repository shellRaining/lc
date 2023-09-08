import { TreeNode } from '../lib/tree.ts';

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root == null) return null;
  const stk = [root];

  while (stk.length) {
    const node = stk.pop();
    [node.left, node.right] = [node.right, node.left];
    if (node.right) stk.push(node.right);
    if (node.left) stk.push(node.left);
  }
  return root;
}

const root1 = TreeNode.fromArray([4, 2, 7, 1, 3, 6, 9]);
invertTree(root1).print();
const root2 = TreeNode.fromArray([2, 1, 3]);
invertTree(root2).print();
const root3 = TreeNode.fromArray([]);
invertTree(root3)?.print();
