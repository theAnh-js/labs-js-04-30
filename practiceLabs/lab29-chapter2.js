
// v1
export function findMaxOddDivisor(n){

    if(n <= 0 || !Number.isInteger(n)) return -1;

    let oddEven = [];
    for(let i = 0; i <= n; i++){
        if(n % i === 0 && i % 2 !== 0) oddEven.push(i);
    }
    return oddEven[oddEven.length - 1];
}

//v2
export function findMaxOddDivisorV2(n){

    if(n <= 0 || !Number.isInteger(n)) return -1;

    let oddEven = [];
    for(let i = 0; i <= n; i++){
        if(n % i === 0 && i % 2 !== 0) oddEven.push(i);
    }
    
    let output = oddEven[0];
    oddEven.forEach(oddNumber => {
        if(output < oddNumber) output = oddNumber;
    })
    return output;
}