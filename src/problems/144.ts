import { TreeNode } from '../lib/tree.ts';

function preorderTraversal(root: TreeNode | null): number[] {
  if (root == null) return [];
  const res = [];
  const stk = [root];

  while (stk.length) {
    const node = stk.pop();
    res.push(node.val);
    if (node.right) stk.push(node.right);
    if (node.left) stk.push(node.left);
  }

  return res;
}

// function preorderTraversal(root: TreeNode | null): number[] {
//   const res = [];
//
//   function helper(root: TreeNode | null) {
//     if (root == null) return;
//
//     res.push(root.val);
//     helper(root.left);
//     helper(root.right);
//   }
//
//   helper(root);
//
//   return res;
// }

const root1 = TreeNode.fromArray([1, null, 2, 3]);
console.log(preorderTraversal(root1));
const root2 = TreeNode.fromArray([]);
console.log(preorderTraversal(root2));
const root3 = TreeNode.fromArray([1]);
console.log(preorderTraversal(root3));
const root4 = TreeNode.fromArray([3, 9, 20, null, null, 15, 7]);

export { preorderTraversal };
