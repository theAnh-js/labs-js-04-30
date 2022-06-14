"use strict";
let sayHello = function (a, b) {
  console.log(this.name, a + b);
};
const student = {
  name: "luongtheanh",
};
//bind trả về 1 function mới nên ta phải gán và gọi nó khi cần.
const studentSay = sayHello.bind(student);
studentSay(5, 10);

//còn call và apply thì gọi luôn.
sayHello.call(student, 5, 10);
sayHello.apply(student, [5, 10]);

// khi truyền thêm tham số thì với apply ta phải truyền vào
// theo dạng array.

//excerisce
function createRandomColorFn(colorList) {
  // your code here
  let lastIndex = colorList.length - 1;
  function randomColor() {
    let i = Math.round(Math.random(lastIndex));
    return colorList[i];
  }
  return randomColor;
}
let getColor = createRandomColorFn(["green", "blue"]);
console.log(getColor());
console.log(getColor());
console.log(getColor());
