

// get random number between [5, 10] 
export function randomNumber(min, max) {

    // return Math.round(Math.random() * (max - min) + min)
    if( min >= max) return -1;
    
    let random = Math.random() * (max - min)
    return Math.round(random) + min
}
console.log(randomNumber(5, 10))
console.log(randomNumber(5, 10))
console.log(randomNumber(5, 10))
console.log(randomNumber(10, 99))
console.log(randomNumber(10, 99))
console.log(randomNumber(10, 99))
console.log(randomNumber(100, 999))
console.log(randomNumber(100, 999))
console.log(randomNumber(100, 999))