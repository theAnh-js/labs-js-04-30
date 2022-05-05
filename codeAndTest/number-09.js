// v1
export function hasTwoDigitsWithSum(n, sum) {
    if (n < 10 || n >= 1000000) return false;
    if (sum <= 0 || sum >= 19) return false;

    let strNum = n.toString();
    for (let i = 0; i < strNum.length; i++) {
        for (let j = 1; j < strNum.length; j++) {
            let sumOfDigit = Number(strNum[i]) + Number(strNum[j])
            if (sumOfDigit === sum) return true;
        }
    }
    return false;

}
