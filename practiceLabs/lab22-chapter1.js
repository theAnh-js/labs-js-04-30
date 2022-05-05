

export function multiplyDivisor(n){

    if(n <= 0 || !Number.isInteger(n)) return -1;

    let output = 1;
    for(let i = 1; i <= n; i++){
        if(n % i === 0) output *= i;
    }
    return output;
}
