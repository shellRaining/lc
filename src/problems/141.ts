import ListNode from '../lib/list.ts';

function hasCycle(head: ListNode | null): boolean {
  // if (head == null) return false;
  //
  // let slow = head;
  // let fast = head;
  // while (fast) {
  //   slow = slow.next;
  //   if (fast.next == null) return false;
  //   fast = fast.next.next
  //   if(fast == slow) return true
  // }
  // return slow == fast;

  if (head == null) return false;

  let cur = head;
  const nodeSet = new Set();
  while (cur != null) {
    if (nodeSet.has(cur)) return true;
    nodeSet.add(cur);
    cur = cur.next;
  }
  return false
}

const head1 = ListNode.fromArray([3, 2, 0, -4]);
head1.next.next.next.next = head1.next;
console.log(hasCycle(head1));
const head2 = ListNode.fromArray([1, 2]);
head2.next.next = head2;
console.log(hasCycle(head2));
const head3 = ListNode.fromArray([1, 2]);
console.log(hasCycle(head3));

export { hasCycle };
