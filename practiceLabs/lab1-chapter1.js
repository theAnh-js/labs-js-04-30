
//v1
export function getSumV1(n){
    if(n <= 0) return 0;

    let output = 0;
    for(let i = 0; i <= n; i++) {
        output += i;
    }
    return output;
}
//v2
export function getSumV2(n){
    if(n <= 0) return 0;
    return n * (n + 1)/2;
}
//v3
export function getSumV3(n){
    if(n <= 0) return 0;
    let output = 0;
    while(n > 0){
        output += n;
        n--;
    }
    return output;
}