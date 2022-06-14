function createInterable(n) {
  let i = 0;

  return {
    [Symbol.iterator]() {
      return {
        next() {
          const result = {
            value: i,
            done: i >= n,
          };

          //increase i:
          i++;
          return result;
        },
      };
    },
  };
}

const iterator = createInterable(10);
// let result = iterator.next();
// while (!result.done) {
//   console.log(result.value);

//   result = iterator.next();
// }
for (const number of iterator) {
  console.log(number);
}
