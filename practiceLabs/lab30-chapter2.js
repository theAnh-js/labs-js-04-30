
export function checkIfPerfectNumber(n){
    if(n <= 0 || !Number.isInteger(n)) return -1;

    let sumDivisors = 0;
    for(let i = 0; i < n; i++) {
        if(n % i === 0) sumDivisors += i;
    }
    return sumDivisors === n;
}