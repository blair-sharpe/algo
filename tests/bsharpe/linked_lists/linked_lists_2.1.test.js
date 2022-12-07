const {
  removeDuplicatesinLinkedList,
} = require("../../../solutions/bsharpe/linked_lists/linked_list_2.1");
const {
  LinkedList,
  Node,
} = require("../../../solutions/bsharpe/linked_lists/LinkedList");
const { strictEqual, deepStrictEqual } = require("assert");

const unsortedLinkedList = new LinkedList();

const firstNode = new Node("3");
const secondNode = new Node("0");
const fourthNode = new Node("3");
const thirdNode = new Node("4");

firstNode.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = fourthNode;
unsortedLinkedList.head = firstNode;

describe("Chapter 1 Arrays: 1.1", function () {
  context("bsharpe", function () {
    it("should remove duplicate in list with buffer", function () {
      const linkedListDuplicatesRemoved =
        removeDuplicatesinLinkedList(unsortedLinkedList);
      strictEqual(linkedListDuplicatesRemoved.head.value, "3");
      strictEqual(linkedListDuplicatesRemoved.head.next.value, "0");
      strictEqual(linkedListDuplicatesRemoved.head.next.next.value, "4");
    });
  });
});
