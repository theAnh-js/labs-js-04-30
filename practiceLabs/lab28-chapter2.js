
// v1
export function sumDivisors(n){

    if(n <= 1 || !Number.isInteger(n)) return -1;

    let output = 0;
    for(let i = 1; i < n; i++){
        if(n % i == 0) output += i;
    }
    return output;
}
//v2
export function sumDivisorsV2(n){

    if(n <= 1 || !Number.isInteger(n)) return -1;

    let output = 0;
    let i = 1;
    while(i < n){
        if(n % i === 0) output += i;
        i++;
    }
    return output;
}