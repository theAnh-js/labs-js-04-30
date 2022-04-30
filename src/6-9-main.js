// even?
export function isEven(n){
    return n % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));

// odd?
export function isOdd(n){
    return n % 2 !== 0;
}
console.log(isOdd(4));
console.log(isOdd(7));

// perfect square? - số chính phương
// bình phương căn bậc 2 của nó = chính nó. (kq căn bậc 2 lấy số nguyên )
export function isPerfectSquare(n){

    if(n <= 0) return false;

    let sqrtN = Math.sqrt(n);
    let sqrtNInt = Math.trunc(sqrtN);

    return sqrtNInt * sqrtNInt === n;
}
console.log(isPerfectSquare(25));
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(20));
console.log(isPerfectSquare(10));