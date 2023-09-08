import ListNode from '../lib/list.ts';

function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;
  let cnt = 0;

  while (fast) {
    slow = slow.next;
    if (fast.next == null) return null;
    fast = fast.next.next;

    cnt++;
    if (fast == slow) break;
  }

  if (slow != fast) return null;

  slow = head;
  while (slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

const head1 = ListNode.fromArray([3, 2, 0, -4]);
head1.next.next.next.next = head1.next;
ListNode.print(detectCycle(head1));
const head2 = ListNode.fromArray([1, 2]);
ListNode.print(detectCycle(head2));
console.log(detectCycle(head2));
const head3 = ListNode.fromArray([1, 2]);
ListNode.print(detectCycle(head4));

export { detectCycle };
