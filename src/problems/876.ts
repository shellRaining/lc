import { ListNode } from '../lib/list.ts';
function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

const head1 = ListNode.fromArray([1, 2, 3, 4, 5]);
middleNode(head1).print();
const head2 = ListNode.fromArray([1, 2, 3, 4, 5, 6]);
middleNode(head2).print();
const head3 = ListNode.fromArray([1]);
middleNode(head3).print();

export { middleNode };
