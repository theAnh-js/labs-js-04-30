console.log((0.1).toFixed(20));
console.log((0.2).toFixed(20));

// phép so sánh số thực trong js không phải lúc nào
// cũng chính xác.
console.log((0.1 + 0.2) == 0.3); //false

// Khi muốn so sánh 2 số thực với nhau thì xử lý
// việc làm tròn số trước rồi so sánh sau. 
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);  // true
console.log((0.1 + 0.2).toFixed(1) === 0.3.toFixed(1));  // true