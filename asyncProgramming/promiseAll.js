// Syntax:  Promise.all(iterable)

// iterable nghĩa là thứ gì đó có thể lặp qua, ví dụ như Array
// Chỉ cần có 1 thằng reject là nó reject immediately luôn.
// This returned promise will resolve when all of the input's promises have resolved.
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});
Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});
