import ListNode from '../lib/list.ts';

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists == null || lists.length == 0) return null;

  function mergeTwoLists(a: ListNode, b: ListNode): ListNode {
    let ap = a;
    let bp = b;
    let res = new ListNode(Number.MIN_SAFE_INTEGER);
    let p = res;

    while (ap != null && bp != null) {
      if (ap.val > bp.val) {
        p.next = bp;
        bp = bp.next;
      } else {
        p.next = ap;
        ap = ap.next;
      }
      p = p.next;
    }
    p.next = ap == null ? bp : ap;

    return res.next;
  }

  let res = new ListNode(Number.MIN_SAFE_INTEGER);
  while (lists.length > 0) {
    const tailList = lists.pop();
    if (tailList == null) {
      continue;
    }
    res = mergeTwoLists(res, tailList);
  }

  return res.next;
}

const lists1 = new Array();
lists1.push(ListNode.fromArray([1, 4, 5]));
lists1.push(ListNode.fromArray([1, 3, 4]));
lists1.push(ListNode.fromArray([2, 6]));
ListNode.print(mergeKLists(lists1));

export { mergeKLists };
