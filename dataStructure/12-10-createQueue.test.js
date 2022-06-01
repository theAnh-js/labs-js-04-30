function createQueue() {
  const array = [];

  function enqueue(data) {
    array.push(data);
  }
  function dequeue() {
    return array.shift();
  }
  function getSize() {
    return array.length;
  }
  function getFront() {
    return array.length > 0 ? array[0] : undefined;
  }
  function getBack() {
    return array.length > 0 ? array[array.length - 1] : undefined;
  }
  return {
    enqueue,
    dequeue,
    getSize,
    getFront,
    getBack,
  };
}
describe("createQueue()", () => {
  it("all in one", () => {
    const queue = createQueue();
    expect(queue.getSize()).toBe(0);
    expect(queue.getFront()).toBe(undefined);
    expect(queue.getBack()).toBe(undefined);

    //enqueue10
    queue.enqueue(10);
    expect(queue.getSize()).toBe(1);
    expect(queue.getFront()).toBe(10);
    expect(queue.getBack()).toBe(10);
    //enqueue 20
    queue.enqueue(20);
    expect(queue.getSize()).toBe(2);
    expect(queue.getFront()).toBe(10);
    expect(queue.getBack()).toBe(20);

    //dequeue
    const ten = queue.dequeue();
    expect(ten).toBe(10);
    expect(queue.getSize()).toBe(1);
    expect(queue.getFront()).toBe(20);
    expect(queue.getBack()).toBe(20);
    //dequeue
    const twenty = queue.dequeue();
    expect(twenty).toBe(20);
    expect(queue.getSize()).toBe(0);
    expect(queue.getFront()).toBe(undefined);
    expect(queue.getBack()).toBe(undefined);
  });
});
