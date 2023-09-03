import ListNode from './lib/list.ts';

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 == null) return list2;
  if (list2 == null) return list1;

  let p1 = list1;
  let p2 = list2;
  const res = new ListNode(0);
  let cur = res;

  while (p1 != null && p2 != null) {
    if (p1.val < p2.val) {
      cur.next = p1;
      p1 = p1.next;
    } else {
      cur.next = p2;
      p2 = p2.next;
    }
    cur = cur.next;
  }
  cur.next = p1 == null ? p2 : p1;

  return res.next;
}

const a1 = ListNode.fromArray([1, 2, 4]);
const b1 = ListNode.fromArray([1, 3, 4]);
ListNode.print(mergeTwoLists(a1, b1));
const a2 = ListNode.fromArray([]);
const b2 = ListNode.fromArray([]);
ListNode.print(mergeTwoLists(a2, b2));
const a3 = ListNode.fromArray([]);
const b3 = ListNode.fromArray([0]);
ListNode.print(mergeTwoLists(a3, b3));

export { mergeTwoLists };
