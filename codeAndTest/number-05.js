//v1
// export function isPerfectSquare(n) {
//     if (n <= 0 || n >= 100000) return false;
//     return n === Math.sqrt(n) ** 2;
// }

// v2
export function isPerfectSquare(n){
    if(n <= 0 || n >= 100000) return false;

    return Number.isInteger(Math.sqrt(n));
}
