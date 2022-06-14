function hello() {
  console.log("hello world");
}
function throttle(callback, wait) {
  let flag = false;
  return function () {
    if (flag) return; // lần thứ 2,3,4 come here

    flag = true;
    setTimeout(() => {
      callback();
      flag = false;
    }, wait); // lần thứ 1 come here
  };
}
const throttledHello = throttle(hello, 500);

// 0ms -> 500ms
throttledHello(); // "hello world"
throttledHello(); // ignored
throttledHello(); // ignored
throttledHello(); // ignored

// 600ms -> 1100ms
setTimeout(throttledHello, 600); // "hello world"
setTimeout(throttledHello, 600); // ignored
setTimeout(throttledHello, 700); // ignored
setTimeout(throttledHello, 700); // ignored
setTimeout(throttledHello, 800); // ignored
setTimeout(throttledHello, 800); // ignored
