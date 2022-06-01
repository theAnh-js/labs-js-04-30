function createCounter(initValue) {
  let value = initValue || 0; // memozation:  kỹ thuật ghi nhớ

  function increase() {
    value++;
    console.log(value);
  }

  function decrease() {
    value--;
    console.log(value);
  }

  function getValue() {
    console.log(value);
    return value;
  }

  return {
    increase,
    decrease,
    getValue,
  };
  // equal to :
  //   return {
  //     increase: increase,
  //     decrease: decrease,
  //     getValue: getValue,
  //   };
}

const counter1 = createCounter(0);
counter1.increase(); //1
counter1.increase(); //2
counter1.increase(); //3

counter1.decrease(); // 3 - 1 = 2
counter1.getValue(); //2

//counter1 anh counter2 have no effect together.
const counter2 = createCounter(10);
counter2.increase(); //11
counter2.increase(); //12
counter2.increase(); //13

counter2.decrease(); // 13 - 1 = 12
counter2.getValue(); //12
