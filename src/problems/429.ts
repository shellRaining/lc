class Node {
  val: number;
  children: Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

function levelOrder(root: Node | null): number[][] {
  if (root == null) return [];
  const res = [];
  const q = [root];
  let tmp = [];

  while (q.length) {
    const len = q.length;
    for (let i = 0; i < len; i++) {
      const node = q.shift();
      tmp.push(node.val);
      for (const child of node.children) {
        q.push(child);
      }
    }
    res.push(tmp);
    tmp = [];
  }

  return res;
}

export { levelOrder };
