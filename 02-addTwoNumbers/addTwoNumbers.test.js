const excercise = require("./addTwoNumbers");
const addTwoNumbers = excercise.addTwoNumbers;
const ListNode = excercise.ListNode;

// Utility to create a list node based on array input
var createListNode = (arr) => {
  var myListNode = new ListNode();
  var pointer = myListNode;
  arr.forEach((element, index) => {
    pointer.val = element;
    if (index < arr.length - 1) {
      pointer.next = new ListNode();
    }
    pointer = pointer.next;
  });
  return myListNode;
};

test("Add two numbers - Should return [7,0,8] for input l1 = [2,4,3], l2 = [5,6,4]", () => {
  const l1 = createListNode([2, 4, 3]);
  const l2 = createListNode([5, 6, 4]);

  var resultLinkedList = addTwoNumbers(l1, l2);
  expect(resultLinkedList.val).toBe(7);
  resultLinkedList = resultLinkedList.next;
  expect(resultLinkedList.val).toBe(0);
  resultLinkedList = resultLinkedList.next;
  expect(resultLinkedList.val).toBe(8);
  expect(resultLinkedList.next).toBeNull();
});

test("Add two numbers - Should return [8,9,9,9,0,0,0,1] for input l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]", () => {
  const l1 = createListNode([9, 9, 9, 9, 9, 9, 9]);
  const l2 = createListNode([9, 9, 9, 9]);

  var resultLinkedList = addTwoNumbers(l1, l2);
  expect(resultLinkedList.val).toBe(8);
  resultLinkedList = resultLinkedList.next;
  expect(resultLinkedList.val).toBe(9);
  resultLinkedList = resultLinkedList.next;
  expect(resultLinkedList.val).toBe(9);
  resultLinkedList = resultLinkedList.next;
  expect(resultLinkedList.val).toBe(9);
  resultLinkedList = resultLinkedList.next;
  expect(resultLinkedList.val).toBe(0);
  resultLinkedList = resultLinkedList.next;
  expect(resultLinkedList.val).toBe(0);
  resultLinkedList = resultLinkedList.next;
  expect(resultLinkedList.val).toBe(0);
  resultLinkedList = resultLinkedList.next;
  expect(resultLinkedList.val).toBe(1);
  expect(resultLinkedList.next).toBeNull();
});

test("Add two numbers - Should return [0] for input l1 = [0], l2 = [0]", () => {
  const l1 = createListNode([0]);
  const l2 = createListNode([0]);

  var resultLinkedList = addTwoNumbers(l1, l2);
  expect(resultLinkedList.val).toBe(0);
  expect(resultLinkedList.next).toBeNull();
});
