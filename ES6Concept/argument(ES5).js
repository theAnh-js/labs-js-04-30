//function sum không cần nhận tham số,
// vẫn có thể lấy đối số truyền vào thông qua argument.
// lưu ý: argument không phải là array, nó là Array-like object.

function sum() {
  let sum = 0;
  console.log(arguments);
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}
console.log(sum(1)); //1
console.log(sum(1, 2, 3)); //6
console.log(sum(10, 10, 10)); //30

console.log("-----------------");
// khi muốn dùng arguments giống như 1 array ta dùng
// spread operation. or dùng Array.from(arguments)
function total() {
  let array = [...arguments];
  return array.reduce((sum, curr) => sum + curr, 0);
}
console.log(total(1)); //1
console.log(total(1, 2, 3)); //6
console.log(total(10, 10, 10)); //30

// INSTEAD OF USING URGUMENTS OF ES5.
// WE SHOULE USE REST OPERATION WHEN DON'T NO KNOW
// ACOUNT OF PARAMETERS.
function total(...numberList) {
  return numberList.reduce((sum, curr) => sum + curr, 0);
}
console.log(total(1)); //1
console.log(total(1, 2, 3)); //6
console.log(total(10, 10, 10)); //30

// khi không muốn lấy số thứ nhất vào numberList:
function total(firstNumber, ...numberList) {
  console.log("firstNumber: ", firstNumber);

  return numberList.reduce((sum, curr) => sum + curr, 0);
}
console.log(total(1)); //0
console.log(total(1, 2, 3)); //5
console.log(total(10, 10, 10)); //20
