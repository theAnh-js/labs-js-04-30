
// v1
export function acountDivisors(n){
    
    if(n <= 0 || !Number.isInteger(n)) return -1;

    let acount = 0;
    for(let i = 1; i <= n; i++){
        if(n % i == 0) acount ++;
    }; 

    return acount;
}

//v2
export function acountDivisorsV2(n){
    if(n <= 0 || !Number.isInteger(n)) return -1;

    let arr = [];
    for(let i = 1; i <= n; i++){
        if(n % i === 0) arr.push(i)
    }
    return arr.length;
}