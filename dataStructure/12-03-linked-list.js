// function createLinkList() {
//   let head = null;

//   let insertNumber = function (newData) {
//     let newNode = {
//       data: newData,
//       next: null,
//     };

//     if (head == null) {
//       head = newNode;
//       return;
//     } else {
//       newNode.next = head;
//       head = newNode;
//     }
//   };

//   let printList = function () {
//     if (head == null) return;

//     let current = head;
//     while (current != null) {
//       console.log(current.data);
//       current = current.next;
//     }
//   };
//   return {
//     insertNumber,
//     printList,
//   };
// }

// let startGetLinkedList = createLinkList();
// startGetLinkedList.insertNumber(5);
// startGetLinkedList.insertNumber(4);
// startGetLinkedList.insertNumber(3);
// startGetLinkedList.insertNumber(2);
// startGetLinkedList.insertNumber(1);

// startGetLinkedList.printList();

function createLinkedList() {
  let head = null;
  let insertHead = function (newData) {
    let newNode = {
      data: newData,
      next: null,
    };

    if (head == null) {
      head = newNode;
      return;
    } else {
      newNode.next = head;
      head = newNode;
    }
  };

  let printList = function () {
    if (head == null) return;

    let currentNode = head;
    while (currentNode != null) {
      console.log(currentNode.data);

      currentNode = currentNode.next;
    }
  };

  return {
    insertHead,
    printList,
  };
}

//getHead
//getTail
//getSize
//findIndexByData
//findWithCallBack

function createLinkedList3() {
  let head = null;

  let insertHead = function (newData) {
    let newNode = {
      data: newData,
      next: null,
    };

    if (head == null) {
      head = newNode;
      return;
    } else {
      newNode.next = head;
      head = newNode;
    }
    return head;
  };

  let getHead = function () {
    return head;
  };

  let getTail = function () {
    if (head == null) return null;

    let tail = head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    return tail;
  };

  let getSize = function () {
    if (head == null) return 0;

    let size = 0;
    let node = head;
    while (node !== null) {
      size++;
      node = node.next;
    }
    return size;
  };

  let findIndexByData = function (data) {
    if (head == null) return -1;

    let node = head;
    let i = 0;
    while (node !== null) {
      if (node.data === data) return i;
      i++;
      node = node.next;
    }
    return -1;
  };
  let findWithCallBack = function (callback) {
    if (head == null) return undefined;

    let node = head;
    let i = 0;
    while (node !== null) {
      if (callback(node.data)) return i;
      i++;
      node = node.next;
    }
    return undefined;
  };

  let printList = function () {
    if (head == null) return;

    let currentNode = head;
    while (currentNode !== null) {
      console.log(currentNode.data);

      currentNode = currentNode.next;
    }
  };

  return {
    getHead,
    getTail,
    getSize,
    findIndexByData,
    findWithCallBack,
    insertHead,
    printList,
  };
}

let start = createLinkedList3();
start.insertHead(5);
start.insertHead(4);
start.insertHead(3);
start.insertHead(2);
start.insertHead(1);

console.log("head: ", start.getHead());
console.log("tail: ", start.getTail());

console.log("size: ", start.getSize());

console.log("data: ", start.findIndexByData(3));
console.log("data: ", start.findIndexByData(30));
console.log(
  "callback: ",
  start.findWithCallBack((x) => x === 3)
);

start.printList();

function createLinkedList4() {
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
let start2 = createLinkedList4();
start2.insertTail(4);
start2.insertTail(3);
start2.insertTail(2);
start2.insertTail(1);
start2.insertBeforePosition(5, 2);
start2.insertBeforePosition(12, 3);

// start2.removeHead();
// start2.removeTail();
// start2.removeAtPosition(2);

start2.printList();
