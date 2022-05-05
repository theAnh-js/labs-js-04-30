
//v1
// export function isDecreasingNumber(n) {
//     if (n < 10 || n >= 1000000) return false;

//     let strNum = n.toString();
//     for (let i = 0; i < strNum.length; i++) {
//         if (strNum[i] <= strNum[i + 1]) return false;
//     }
//     return true;
// }

//v2
export function isDecreasingNumber(n){
    if(n < 10 || n >= 1000000) return false;

    let remaining = n;
    let smallDigit = -1;
    while(remaining > 0){
        let lastDigit = remaining % 10;
        if(lastDigit <= smallDigit) return false;
        smallDigit = lastDigit;
        remaining = Math.trunc(remaining/10);
    }
    return true;
}