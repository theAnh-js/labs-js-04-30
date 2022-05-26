function createLinkedList() {
  let head = null;

  function getTail() {
    if (head == null) return;

    let tail = head;
    while (tail.next != null) {
      tail = tail.next;
    }
    return tail;
  }
  function insertTail(data) {
    // your code here ...
    let newNode = {
      data: data,
      next: null,
    };

    if (head == null) {
      head = newNode;
    } else {
      getTail().next = newNode;
    }

    return head;
  }

  function insertHead(data) {
    let newNode = {
      data: data,
      next: null,
    };

    if (head == null) {
      head = newNode;
    } else {
      newNode.next = head;
      head = newNode;
    }

    return head;
  }
  function insertBeforePosition(data, position) {
    if (head == null) {
      insertHead(data);
      return;
    }

    let prev = head;
    let curr = head;
    let i = 0;
    while (curr != null && i < position) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    let newNode = {
      data: data,
      next: curr,
    };
    prev.next = newNode;

    return head;
  }

  function removeHead() {
    if (head != null) {
      head = head.next;
      return head;
    }
  }

  function removeTail() {
    //if empty
    if (head == null) return null;

    //if only one item
    if (head.next == null) {
      head = null;
      return;
    }

    //otherwise
    let secondLast = head;
    while (secondLast.next.next != null) {
      secondLast = secondLast.next;
    }
    secondLast.next = null;
    return head;
  }

  function removeAtPosition(position) {
    if (position <= 0 || head == null) return removeHead();

    // only one item
    if (head.next == null) {
      head = null;
      return head;
    }

    //otherwise
    let pre = head;
    let curr = head;
    let i = 0;
    while (curr.next != null && i < position) {
      pre = curr;
      curr = curr.next;
      i++;
    }

    pre.next = curr.next;
    return head;
  }

  function printList() {
    if (head == null) return;

    let current = head;
    while (current != null) {
      console.log(current.data);

      current = current.next;
    }
  }

  return {
    getTail,
    insertTail,
    insertHead,
    insertBeforePosition,

    removeHead,
    removeTail,
    removeAtPosition,
    printList,
  };
}
let start = createLinkedList();
start.insertTail(4);
start.insertTail(3);
start.insertTail(2);
start.insertTail(1);
start.insertBeforePosition(5, 2);

// start.removeHead();
// start.removeTail();
start.removeAtPosition(2);

start.printList();
