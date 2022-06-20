function log() {
  console.log("log");
}

function debounce(callback, waitTime) {
  let timeoutId;
  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(callback, waitTime);
  };
}

let click = debounce(log, 500);

click(); // nó đợi xem trong 500ms ta có click lần nào nữa không, nếu có thì nó sẽ hủy lệnh click này.
click(); // vì lại click nên lệnh click trên được hủy, lệnh click này hoạt động tương tự.
click(); // đến lần này, trong 500ms không có lệnh click nào nữa nên nó show "log".
// Vì vậy chỉ ra 1 lần "log"
