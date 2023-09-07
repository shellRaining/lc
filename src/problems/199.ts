import { TreeNode } from '../lib/tree.ts';

function rightSideView(root: TreeNode | null): number[] {
  
}

const root1 = TreeNode.fromArray([1, 2, 3, null, 5, null, 4]);
console.log(rightSideView(root1));
const root2 = TreeNode.fromArray([1, null, 3]);
console.log(rightSideView(root2));
const root3 = TreeNode.fromArray([]);
console.log(rightSideView(root3));
