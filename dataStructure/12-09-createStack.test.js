function createStack() {
  let array = [];

  function getTop() {
    return array[array.length - 1];
  }
  function getSize() {
    return array.length;
  }
  function isEmpty() {
    return array.length === 0;
  }
  function push(data) {
    array.push(data);
  }
  function pop() {
    return array.pop();
  }

  return {
    getTop,
    getSize,
    isEmpty,
    push,
    pop,
  };
}

describe("createStack()", () => {
  it("all in one", () => {
    //empty stack
    const stack = createStack();
    expect(stack.getSize()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getTop()).toBeUndefined();

    //push 5:
    stack.push(5);
    expect(stack.getSize()).toBe(1);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.getTop()).toBe(5);

    //push 10:
    stack.push(10);
    expect(stack.getSize()).toBe(2);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.getTop()).toBe(10);

    //pop()
    const ten = stack.pop();
    expect(ten).toBe(10);
    expect(stack.getSize()).toBe(1);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.getTop()).toBe(5);

    //pop()
    const five = stack.pop();
    expect(five).toBe(5);
    expect(stack.getSize()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getTop()).toBe(undefined);
  });
});
