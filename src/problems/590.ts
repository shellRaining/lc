function postorder(root: Node | null): number[] {
  if (root == null) return [];
  const stk = [root];
  const res = [];
  while (stk.length) {
    const node = stk.pop();
    res.push(node.val);
    for (const child of node.children) {
      stk.push(child);
    }
  }

  return res.reverse();
}
