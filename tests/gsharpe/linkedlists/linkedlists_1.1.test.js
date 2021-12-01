const assert = require("assert");
const {
  LinkedList,
  ListNode,
  remove,
} = require("../../../solutions/gsharpe/linkedlists/linkedlists_1.1.js");

describe("Chapter 1 Linked Lists: 1.1", function () {
  context("gsharpe", function () {
    const node1 = new ListNode('a');
    const node2 = new ListNode('b');
    const node3 = new ListNode('c');
    const node4 = new ListNode('a');
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    const list = new LinkedList(node1);
    it("should remove repeated element", function () {
      const expectedNode1 = new ListNode('a');
      const expectedNode2 = new ListNode('b');
      const expectedNode3 = new ListNode('c');
      expectedNode1.next = expectedNode2;
      expectedNode2.next = expectedNode3;
      const expected = new LinkedList(expectedNode1);
      remove(list);
      assert.deepStrictEqual(list, expected);
    });
  });
});
