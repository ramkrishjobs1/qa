/*141. Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again 
by continuously following the next pointer. Internally, pos is used to denote the index of the node 
that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
 
/**
 * @param {ListNode} head
 * @return {boolean}
 * https://leetcode.com/problems/linked-list-cycle/
 */
 var hasCycle = function(head) {
    let fastPtr = head;
    let slowPtr = head;
    let hasIt = false;
    while(slowPtr && slowPtr.next) {
        function moveSlow(ptr) {
            return ptr && ptr.next ? ptr.next : null;
        }

        function moveFast(ptr) {
            return ptr && ptr.next ? ptr.next.next : null;
        }

        slowPtr = moveSlow(slowPtr);
        fastPtr = moveFast(fastPtr);
        if (slowPtr == fastPtr) {
            hasIt = true;
            break;
        }
    }
    return hasIt;
};