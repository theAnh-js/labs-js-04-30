

// get a random number between 0 and 1 (0 inclusive, 1 exclusive)
console.log(Math.random());

// get a random number between 0 and n.
export function randomNumber(n){

    if(n < 0) return -1;

    return Math.round(Math.random() * n);  // random từ 0
    // đến n (tính cả n vì ta dùng round)
}
console.log(randomNumber(4));
console.log(randomNumber(4));
console.log(randomNumber(4));
console.log(randomNumber(4));
console.log(randomNumber(4));
console.log(randomNumber(4));
console.log(randomNumber(4));
console.log(randomNumber(4));