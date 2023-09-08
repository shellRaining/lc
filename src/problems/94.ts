import { TreeNode } from '../lib/tree.ts';

function inorderTraversal(root: TreeNode | null): number[] {
  if (root == null) return [];

  const res = [];
  const stk = [];
  let cur = root;

  while (cur || stk.length) {
    if (cur) {
      stk.push(cur);
      cur = cur.left;
    } else {
      cur = stk.pop();
      res.push(cur.val);
      cur = cur.right;
    }
  }

  return res;
}

// function inorderTraversal(root: TreeNode | null): number[] {
//   const res = [];
//
//   function helper(root: TreeNode | null) {
//     if (root == null) return;
//
//     helper(root.left);
//     res.push(root.val);
//     helper(root.right);
//   }
//
//   helper(root);
//
//   return res;
// }

const root1 = TreeNode.fromArray([1, null, 2, 3]);
console.log(inorderTraversal(root1));
const root2 = TreeNode.fromArray([]);
console.log(inorderTraversal(root2));
const root3 = TreeNode.fromArray([1]);
console.log(inorderTraversal(root3));

export { inorderTraversal };
