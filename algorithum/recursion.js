// tìm số fibbonacci ở vị trí thứ n
function fib(n) {
  if (n < 2) return 1;
  else return fib(n - 1) + fib(n - 2);
}
//1 1 2 3 5 8 13 21 34 55
console.log(fib(2));
console.log(fib(3));
console.log(fib(5));
console.log(fib(7));
console.log(fib(9));

//tính giai thừa của n
//v1
function generateFactorialV1(n) {
  if (n <= 1) return 1;
  return n * generateFactorialV1(n - 1);
}
/**
 5 * generateFactorial(4);
 4 * generateFactorial(3);
 3 * generateFactorial(2);
 2 * generateFactorial(1);
 1 => return 1
*/
console.log(generateFactorialV1(1));
console.log(generateFactorialV1(3));
console.log(generateFactorialV1(5));
//V2
function generateFactorialV2(n) {
  if (n > 0) {
    return n * generateFactorialV2(n - 1);
  }
  return 1;
}
console.log(generateFactorialV2(1));
console.log(generateFactorialV2(3));
console.log(generateFactorialV2(5));

// tạo vòng loop bằng đệ quy recursion
function loop(start, end, callback) {
  if (start < end) {
    callback(start);
    return loop(start + 1, end, callback);
  }
}
let array = ["Javacript", "PHP", "Ruby"];
loop(0, array.length, function (index) {
  let language = array[index];
  console.log(language);
});
