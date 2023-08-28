import ListNode from './lib/list.ts';

function partition(head: ListNode | null, x: number): ListNode | null {
  const l1 = new ListNode(0);
  const l2 = new ListNode(0);
  let cur1 = l1;
  let cur2 = l2;
  let p = head;

  while (p) {
    if (p.val < x) {
      cur1.next = p;
      cur1 = cur1.next;
    } else {
      cur2.next = p;
      cur2 = cur2.next;
    }
    p = p.next;
  }

  cur1.next = l2.next;
  cur2.next = null;

  return l1.next;
}

const head1 = ListNode.fromArray([1, 4, 3, 2, 5, 2]);
const x1 = 3;
ListNode.print(partition(head1, x1));
const head2 = ListNode.fromArray([2, 1]);
const x2 = 2;
ListNode.print(partition(head2, x2));

export { partition };
