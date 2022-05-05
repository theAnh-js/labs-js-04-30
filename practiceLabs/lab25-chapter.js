// v1
export function sumOfEvenDivisors(n){
    if(n <= 0 || !Number.isInteger(n)) return -1;

    let arrDivisors = []
    for(let i = 1; i <= n; i++) {
        if(n % i === 0 && i % 2 === 0) arrDivisors.push(i);
    }
    let output = 0;
    if(arrDivisors.length > 0){
        output = arrDivisors.reduce((acc, curr) => acc + curr);
    }
    return output;
}

console.log(sumOfEvenDivisors(4));
console.log(sumOfEvenDivisors(4.1));
console.log(sumOfEvenDivisors(-3));
console.log(sumOfEvenDivisors(0));
console.log(sumOfEvenDivisors(10));
console.log(sumOfEvenDivisors(20));

//v2
export function sumOfEvenDivisorsV2(n){
    if(n <= 0 || !Number.isInteger(n)) return -1;

    let arrDivisors = []
    for(let i = 1; i <= n; i++) {
        if(n % i === 0 && i % 2 === 0) arrDivisors.push(i);
    }
    
    let output = 0;
    if(arrDivisors.length > 0){
        arrDivisors.forEach(number => output += number);
    }
    return output;
}
