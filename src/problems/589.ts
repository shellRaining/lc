function preorder(root: Node | null): number[] {
  if (root == null) return null;

  const stk = [root];
  const res = [];
  while (stk.length) {
    const node = stk.pop();
    res.push(node.val);
    while (node.children.length) {
      const child = node.children.pop();
      stk.push(child);
    }
  }

  return res;
}
