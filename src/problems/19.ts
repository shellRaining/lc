import { ListNode } from '../lib/list.ts';

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let fast = head;
  let slow = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (fast == null) return head.next;

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return head;
}

const head1 = ListNode.fromArray([1, 2, 3, 4, 5]);
let r1 = removeNthFromEnd(head1, 2);
r1 ? r1.print() : console.log('no');
const head2 = ListNode.fromArray([1]);
let r2 = removeNthFromEnd(head2, 1);
r2 ? r2.print() : console.log('no');
const head3 = ListNode.fromArray([1, 2]);
let r3 = removeNthFromEnd(head3, 2);
r3 ? r3.print() : console.log('no');

export { removeNthFromEnd };
