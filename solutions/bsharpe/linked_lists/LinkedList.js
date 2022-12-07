const LinkedList = function () {
  this.head = null;
};

const Node = function (value) {
  this.value = value;
  this.next = null;
};

LinkedList.prototype.removeNode = function (node) {
  if (node == this.head) {
    this.head = this.head.next;
    return;
  }
  let tmp = this.head.next;
  let tmpPrev = this.head;
  while (tmp != null) {
    if (tmp == node) {
      tmpPrev.next = tmp.next;
      break;
    } else {
      tmp = tmp.next;
      tmpPrev = tmpPrev.next;
    }
  }
};

module.exports = { LinkedList, Node };
