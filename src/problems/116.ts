import { TreeNode } from '../lib/tree.ts';

function connect(root: Node | null): Node | null {
  if (root == null) return null;
  const q = [root];

  while (q.length) {
    const len = q.length;
    for (let i = 0; i < len; i++) {
      const node = q.shift();
      node.next = len - i - 1 ? q[0] : null;
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }

  return root;
}
