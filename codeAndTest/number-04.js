
//v1
export function isPrime(n){
    if(n <= 0 || n >= 100000) return false;

    for(let i = 2; i <= n -1; i++) {
        if(n % i === 0) return false; // trường hợp n = 2 thì vòng for ko chạy do i <= n-1
    }
    return true;
}

//V2
export function isPrimeV2(n){
    if(n <= 0 || n >= 100000) return false;

    let arr = Array.from({length: n}, (u, index) => index + 1);
    for(let i = arr[1]; i < arr.length - 1; i++) {
        if(n % i === 0) return false;
    }
    return true;
}