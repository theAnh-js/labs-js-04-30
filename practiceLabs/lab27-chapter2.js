
//v1
export function acountEvenDivisorsV1(n){
    if(n <= 0 || !Number.isInteger(n)) return -1;

    let arrEven = [];
    for(let i = 0; i <= n; i++){
        if(n % i == 0 && i % 2 === 0)arrEven.push(i)
    }
    return arrEven.length;
}


console.log((0.1+0.2)-0.3 < Number.EPSILON); // true;