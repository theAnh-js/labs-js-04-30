
//v1
export function isIncreasingNumber(n){
    if(n < 10 || n >= 1000000) return false;

    let strNumber = n.toString();
    for(let i = 0; i < strNumber.length; i++) {
        if(strNumber[i] <= strNumber[i - 1]) return false;
    }
    return true;
}

//V2
export function isIncreasingNumberV2(n){
    if(n < 10 || n >= 1000000) return false;
    
    let remaining = n;
    let bigDigit = 10;
    while(remaining > 0){
        let lastDigit = remaining % 10;
        if(lastDigit >= bigDigit) return false;
        bigDigit = lastDigit;
        remaining = Math.trunc(remaining / 10);
    }
    return true;
}

