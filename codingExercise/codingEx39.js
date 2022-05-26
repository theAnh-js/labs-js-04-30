function createLinkedList() {
  let head = null;

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
    // your code here
    if (position <= 0 || head == null) {
      return insertHead(data);
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

  function printList() {
    if (head == null) reutrn;

    let curr = head;
    while (curr != null) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
  return {
    insertBeforePosition,
    printList,
  };
}

let start = createLinkedList();
start.insertBeforePosition(5, 2);
start.insertBeforePosition(8, 1);
start.insertBeforePosition(6, 2);
start.insertBeforePosition(7, 3);

start.insertBeforePosition(9, 0);
start.insertBeforePosition(90, -1);

start.printList();
