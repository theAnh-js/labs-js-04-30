export function sumV1(n) {
    if (n <= 0) return 0;

    let output = 0;
    for (let i = 1; i <= n; i++) {
        output += i**2;
    }
    return output;
}
export function sumV2(n) {
    if(n <= 0) return 0;
    let output = 0;
    while(n >= 0){
        output += n ** 2;
        n--;
    }
    return output;
}