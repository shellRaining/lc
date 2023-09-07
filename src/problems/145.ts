import { TreeNode } from '../lib/tree.ts';

function postorderTraversal(root: TreeNode | null): number[] {
  if (root == null) return [];

  const stk = [root];
  const res = [];

  while (stk.length) {
    const node = stk.pop();
    res.push(node.val);
    if (node.left) stk.push(node.left);
    if (node.right) stk.push(node.right);
  }

  return res.reverse();
}

// function postorderTraversal(root: TreeNode | null): number[] {
//   const res = [];
//
//   function helper(root: TreeNode | null) {
//     if (root == null) return;
//
//     helper(root.left);
//     helper(root.right);
//     res.push(root.val);
//   }
//
//   helper(root);
//
//   return res;
// }

const root1 = TreeNode.fromArray([1, null, 2, 3]);
console.log(postorderTraversal(root1));
const root2 = TreeNode.fromArray([]);
console.log(postorderTraversal(root2));
const root3 = TreeNode.fromArray([1]);
console.log(postorderTraversal(root3));
