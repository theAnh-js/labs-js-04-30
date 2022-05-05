// v1
export function isDivisibleBy10(n) {

    if (n <= 0 || n >= 1000000) return false;

    let sumOfDigit = 0;
    let remaining = n;
    while (remaining > 0) {
        let lastDigit = remaining % 10;
        sumOfDigit += lastDigit;
        remaining = Math.trunc(remaining / 10);
    }
    return sumOfDigit % 10 === 0;
}

//v2 
export function isDivisibleBy10V2(n) {

    if (n <= 0 || n >= 1000000) return false;

    let sumOfDigit = 0;
    let strNum = n.toString();
    for (let i = 0; i < strNum.length; i++) {
        sumOfDigit += Number.parseInt(strNum[i]);
    }
    return sumOfDigit % 10 === 0;
}