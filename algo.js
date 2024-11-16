/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    //refArr = []
    //count = 0
    //currNode = head
    //loop list
        //store the current node in ref list
        //increase the count
        //if (count % k === 0) {
            //processReverse using refArr
        //}




    let refArr = [];
    let count = 0;
    let currNode = head;

    function processReverse(refArr) {
        //console.log(refArr);
        let middle = Math.floor(refArr.length/2);
        for (let i=0; i<middle; i++) {
            let temp = refArr[i].val;
            refArr[i].val = refArr[refArr.length - 1 - i].val;
            refArr[refArr.length - 1 - i].val = temp;
        }
    }

    while(currNode) {
        refArr.map((ref) => console.log(ref.val));
        count++;
        refArr.push(currNode);
        if ((count % k) === 0) {
            processReverse(refArr);
            count = 0;
            refArr = [];
        } 
        currNode = currNode.next;
    }

    return head;
};