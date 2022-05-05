
//v1
export function sumOfDivisor(n){
    if(n <= 0 || !Number.isInteger(n)) return -1;

    let output = 0;
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) output += i;
    }
    return output;
}

//v2
export function sumOfDivisorV2(n){
    if(n <= 0 || !Number.isInteger(n)) return -1;

    let newArrDivisor = [];
    let i = 0;
    while(i <= n) {
        if(n % i === 0) newArrDivisor.push(i);
        i++;
    }
    return newArrDivisor.reduce((acc, curr) => acc + curr, 0);

}