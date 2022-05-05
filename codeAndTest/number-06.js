export function isPerfectNumber(n){
    if(n <= 1 || n >= 1000) return false;

    let sumDivisors = 0;
    for(let i = 0; i <= n/2; i++) {     // ko nhất thiết phải chạy đến n-1 hehe
        if(n % i === 0) sumDivisors += i;
    }
    return sumDivisors === n;
}