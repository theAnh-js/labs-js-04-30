const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("hey guy!"), 3000);
});
// khi ta tạo ra promise thì hàm bên trong được thực thi luôn
// chứ ko phải .then thì nó mới chạy.
promise.then((result) => console.log(result));
promise.catch((err) => console.log(err));
