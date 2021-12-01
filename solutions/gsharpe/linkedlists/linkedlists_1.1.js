/**
 * 2.1 Write code to remove duplicates from an unsorted linked list.
 * How would you solve this problem if a temporary buffer is not allowed?
 *
 * @author Gareth Sharpe
 * @complexity O(n)
 */
const remove = (list) => {
  let previous = list.head;
  let current = previous.next;
  const map = {
    [previous.data]: true
  };

  while (current) {
    if (map[current.data]) {
      previous.next = current.next;
      current = current.next;
    } else {
      map[current.data] = true;
      previous = current;
      current = current.next;
    }
  }
};

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

module.exports = { remove, ListNode, LinkedList };
