
// kỹ thuật flag

//v1
export function checkNumber(n) {
    let isValid;
    if(n > 0 && n % 2 === 0){
        isValid = true;
    }else{
        isValid = false;
    }
    return isValid;
}
//v2
export function checkNumber2(n) {
    let isValid = false;
    if(n > 0 && n % 2 === 0){
        isValid = true;
    }
    return isValid;
}
//v3
export function checkNumber3(n) {
    if(n > 0 && n % 2 === 0){
        return true;
    }
    return false;
}
//v4 
export function checkNumber4(n) {
    return n > 0 && n % 2 === 0;
}
