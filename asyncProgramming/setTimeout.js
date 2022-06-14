console.log("log1"); //synchronous

// asynchronous
setTimeout(function () {
  // chạy sau cùng
  console.log("log2");
}, 0);

console.log("log3"); // synchronous too.

//EX2
//Sau 5s sẽ tự động chuyển đến trang google.com
// setTimeout(() => {
//   window.location.href = "https://google.com";
// }, 5000);

//cách clear timeout trong khi chưa chạy xong.
const timeoutId = setTimeout(function () {
  // chạy sau cùng
  console.log("log2");
}, 6000);
clearTimeout(timeoutId);
