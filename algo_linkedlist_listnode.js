/*

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.


*/

/*
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let ln = new ListNode(10, null);
console.log(ln.val);
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    console.log('....'+slow.val);
    return slow
};