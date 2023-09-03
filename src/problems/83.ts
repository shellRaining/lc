import ListNode from './lib/list.ts';

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head == null) {
    return null;
  }

  let l: ListNode | null = head;
  let r: ListNode | null = head;
  while (r != null && l != null) {
    if (r.val != l.val) {
      l.next = r;
      l = l.next;
    } else {
      l.next = r.next;
    }
    r = r.next;
  }

  return head;
}

// test
const head = ListNode.fromArray([1, 1, 2, 3, 3]);
ListNode.print(deleteDuplicates(head));
const head2 = ListNode.fromArray([1, 1, 2]);
ListNode.print(deleteDuplicates(head2));

export { deleteDuplicates };
