
//v1
export function multiplyOddDivisorsV1(n) {
    if (n <= 0 || !Number.isInteger(n)) return -1;

    let oddArr = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0 && i % 2 !== 0) oddArr.push(i);
    }

    let output = 1;
    for (let i = 0; i < oddArr.length; i++) {
        output *= oddArr[i];
    }
    return output;
}

// v2
export function multiplyOddDivisorsV2(n) {
    if(n <= 0 || !Number.isInteger(n)) return -1;

    let oddArr = [];
    for(let i = 1; i <= n; i++) {
        if(n % i === 0 && i % 2 !== 0) oddArr.push(i);
    }
    let output = 1;
    oddArr.forEach((oddNumber) => output *= oddNumber);
    return output;
}

//v3
export function multiplyOddDivisorsV3(n) {
    if(n <= 0 || !Number.isInteger(n)) return -1;

    let oddArr = [];
    for(let i = 1; i <= n; i++) {
        if(n % i === 0 && i % 2 !== 0) oddArr.push(i);
    }
    let output = oddArr.reduce((acc, curr) => acc * curr);
    return output;
}

// v4
export function multiplyOddDivisorsV4(n) {
    if(n <= 0 || !Number.isInteger(n)) return -1;

    let oddArr = [];
    let i = 1;
    while(i <= n){
        if( n % i === 0 && i % 2 !== 0)oddArr.push(i);
        i++;
    }
    let output = oddArr.reduce((acc, curr) => acc * curr);
    return output;
}