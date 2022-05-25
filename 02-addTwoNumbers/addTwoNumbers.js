// List node prototype
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

  You may assume the two numbers do not contain any leading zero, except the number 0 itself.

  Example1:
    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 
      • Inputs: l1 =( 2 => 4 => 3 )    l2 =  (5 => 6 => 4)
      • Output: 342 + 465 = 807 = (7 => 0 => 8)

  Example 2:
    Input: l1 = [0], l2 = [0]
    Output: [0]

  Example 3:
    Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    Output: [8,9,9,9,0,0,0,1]

  Constraint:
  • The number of nodes in each linked list is in the range [1, 100].
  • 0 <= Node.val <= 9
  • It is guaranteed that the list represents a number that does not have leading zeros.

*/

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const resultList = new ListNode((l1.val + l2.val) % 10);

  let debt = l1.val + l2.val > 9 ? 1 : 0;
  let lastNode = resultList;
  l1 = l1.next;
  l2 = l2.next;
  let currentVal = 0;
  while (l1 || l2 || debt === 1) {
    currentVal = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + debt;
    lastNode.next = new ListNode(currentVal % 10);
    debt = currentVal > 9 ? 1 : 0;
    lastNode = lastNode.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }
  return resultList;
};

module.exports = { addTwoNumbers, ListNode };

/**
 * NOTES:
 * I need to keep track of the initial result node o I can passs the reference at the end
 *
 *
 * Steps:
 * 1.- I don't need to invert/convert the value, since they are already sorted in a way I can tart the sum.
 * 2.- Initial result node will have the result of first number of each list and if it is greater than 10, get the remainder of n+m/10 and save the 1 for next Sum.
 * 3.- while I havent reached the end of list1, list2 or there is a remainder greater than 0 do:
 *  - Go one node deeper
 *  - Create new node with the same calculations of point 2 and 3 + remainder, and save the new remainder.
 *  - Add the node to the result list at the end.
 *  - start again from point 3
 * 4.- Return result list
 *
 * Add testing file
 *
 * Big O notation: O(n+m)
 */
