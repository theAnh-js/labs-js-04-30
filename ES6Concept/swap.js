let a = 10;
let b = 20;
//using  destructuring to swap a,b:
[a, b] = [b, a];
console.log(a); //20
console.log(b); //10

// hoặc dùng "người thứ 3"-temp để hoán đổi
let c = 10;
let d = 20;

let temp = c;
c = d;
d = temp;
console.log(c); //20
console.log(d); //10
