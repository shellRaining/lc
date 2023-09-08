import { ListNode } from '../lib/list.ts';

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let p = headA
  let q = headB

  while(p != q){
    if(p) p = p.next
    else p = headB

    if(q) q = q.next
    else q = headA
  }

  return p
}

// function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
//   let tail = headA;
//
//   while (tail.next != null) {
//     tail = tail.next;
//   }
//
//   tail.next = headB;
//
//   let slow = headA;
//   let fast = headA;
//
//   while (fast) {
//     slow = slow.next;
//     if (fast.next == null) {
//       tail.next = null;
//       return null;
//     }
//     fast = fast.next.next;
//
//     if (fast == slow) {
//       break;
//     }
//   }
//
//   if (fast != slow) {
//     tail.next = null;
//     return null;
//   }
//   slow = headA;
//   while (slow != fast) {
//     fast = fast.next;
//     slow = slow.next;
//   }
//
//   tail.next = null;
//   return fast;
// }

export { getIntersectionNode };
