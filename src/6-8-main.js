
// diện tích hcn
export function calcAreaRectangle(a, b){
    if(a <= 0 || b <= 0) return -1;

    return a * b
}
console.log(calcAreaRectangle(6, 8))

// chu vi hcn
export function calcPerimaterRectangle(a, b){
    if(a <= 0 || b <= 0) return -1;

    return (a + b) * 2
}
console.log(calcPerimaterRectangle(6, 8))

// diện tích hình tròn
export function calcAreaCircle(r){
    if(r <= 0) return -1;

    return Math.PI * r**2
}
console.log(calcAreaCircle(5))