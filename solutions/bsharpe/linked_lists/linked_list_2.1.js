/**
 * 2.1 Write code to remove duplicates from an unsorted linked list.
 * FOLLOW UP
 * How would you solve this problem if a temporary buffer is not allowed?
 * complete the problem by completing a merge sort then remove duplicates that are besid eachother
 * @complexity O(N)
 * @author Blair Sharpe
 */
const removeDuplicatesinLinkedList = (LinkedList) => {
  let pointer = LinkedList.head;
  let lookup = { [pointer.value]: true };
  pointer = pointer.next;
  while (pointer !== null) {
    if (lookup[pointer.value] === true) {
      LinkedList.removeNode(pointer);
    } else {
      lookup[pointer.value] = true;
    }
    pointer = pointer.next;
  }
  return LinkedList;
};

module.exports = { removeDuplicatesinLinkedList };
