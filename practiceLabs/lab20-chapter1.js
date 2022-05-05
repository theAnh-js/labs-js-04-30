
// v1
export function listDivisorOfIntegerNumber(n) {
    if (n <= 0) return -1;
    if (!Number.isInteger(n)) return -1;

    let output = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) output.push(i);
    }
    return output;
}

console.log(listDivisorOfIntegerNumber(4));
console.log(listDivisorOfIntegerNumber(2));
console.log(listDivisorOfIntegerNumber(7));
console.log(listDivisorOfIntegerNumber(6));
console.log(listDivisorOfIntegerNumber(0));
console.log(listDivisorOfIntegerNumber(3.5));

//v2
export function listDivisorOfIntegerNumberV2(n){
    if(n <= 0) return -1;
    if(!Number.isInteger(n)) return -1;

    let output = [];
    let i = 1;
    while(i <= n){
        if(n % i === 0){
            output.push(i);
        }
        i++;
    }
    return output;
}
console.log(listDivisorOfIntegerNumberV2(4));
console.log(listDivisorOfIntegerNumberV2(2));
console.log(listDivisorOfIntegerNumberV2(7));
console.log(listDivisorOfIntegerNumberV2(6));
console.log(listDivisorOfIntegerNumberV2(0));
console.log(listDivisorOfIntegerNumberV2(3.5));