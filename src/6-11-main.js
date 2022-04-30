

// lấy hàng đơn vị của 1 số có 3 chữ số
function extractTheOnes(n){
    if(n.toString().length !== 3) return -1;
    
    return n % 10;
}
console.log(extractTheOnes(123));
console.log(extractTheOnes(22));
console.log(extractTheOnes(282));

// lấy hàng chục của 1 số có 3 chữ số
function extractTheTens(n){
    if(n.toString().length !== 3) return -1;

    return Math.trunc((n % 100)/10)
}
console.log(extractTheTens(123));
console.log(extractTheTens(22));
console.log(extractTheTens(282));

// lấy hàng trăm của 1 số có 3 chữ số
function extractTheHundreds(n){
    if(n.toString().length !== 3) return-1;

    // return (n - (n % 100))/100; cách 1
    // cách 2:
    return Math.trunc(n/100);
}
console.log(extractTheHundreds(123));
console.log(extractTheHundreds(22));
console.log(extractTheHundreds(282));


// Tổng hợp: tính tổng các số hạng của 1 số có 3 chữ số.
function sum(n){
    const ones = n % 10;
    const tens = Math.trunc((n % 100)/10);
    const hundreds = Math.trunc(n/100);

    return ones + tens + hundreds;
}
console.log(sum(357));
console.log(sum(111));

console.log(778 % 10)