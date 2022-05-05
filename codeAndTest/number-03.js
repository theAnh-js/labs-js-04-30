
// v1
export function isIncreasingNumberByDistance(n, x){
    if(n < 10 || n >= 1000000) return false;

    let strNum = n.toString();
    for(let i = 1; i < strNum.length; i++){

        let isDistance = strNum[i] - strNum[i - 1] == x;
        if((strNum[i] <= strNum[i - 1]) || !isDistance) return false;
    }
    return true;
}

//v2
export function isIncreasingNumberByDistanceV2(n, x){
    if(n < 10 || n >= 1000000) return false;

    let remaining = n; 
    let bigDigit = 10;
    while(remaining > 0){
        let lastDigit = remaining % 10;
        if(lastDigit > bigDigit) return false;
        if(bigDigit < 10){
            if(bigDigit - lastDigit !== x) return false;
        }
        bigDigit = lastDigit;
        remaining = Math.trunc(remaining/10);
    } 
    return true;
}



