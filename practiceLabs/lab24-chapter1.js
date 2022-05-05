
export function oddDivisorList(n){
    if(n <= 0 || !Number.isInteger(n)) return -1;

    let divisorArr = [];
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) divisorArr.push(i);
    }
    let output = divisorArr.filter((number) => number % 2 !== 0);
    return output;

}