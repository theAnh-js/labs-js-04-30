export function generateFibonaci(n) {
  if (!Number(n) || Number.isNaN(n)) return [];
  if (n <= 0 || n >= 1000) return [];

  let arr = Array.from({ length: 2 }, (u, index) => index);

  let sum = 0;
  while (sum < n) {
    sum = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(sum);
  }

  return arr.filter((number) => number < n);
}
//V2
export function generateFibonaciV2(n) {
  if (!Number(n) || Number.isNaN(n)) return [];
  if (n <= 0 || n >= 1000) return [];

  let arr = Array.from({ length: 2 }, (u, index) => index);

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i] + arr[i + 1];
    if (sum < n) arr.push(sum);
  }

  return arr.filter((number) => number < n);
}
//V3
export function generateFibonaciV3(n) {
  if (!Number(n) || Number.isNaN(n)) return [];
  if (n <= 0 || n >= 1000) return [];

  let pre = 0;
  let curr = 1;
  let next = 1;
  let i = 0;

  //khởi tạo arr chứa 0,1. tuy nhiên trường hợp input = 1 thì chỉ lấy 0 thôi, nên cần filter.
  let arr = Array.from({ length: 2 }, (u, index) => index).filter(
    (number) => number < n
  );

  // pre + curr < n vì ta phải tạo ra các số finaboci nhỏ hơn n.
  while (i <= n && pre + curr < n) {
    next = pre + next;
    arr.push(next);

    i++;
    pre = curr;
    curr = next;
  }
  return arr;
}
console.log(generateFibonaciV3(5));
console.log(generateFibonaciV3(1));

//v4 Using RECURSION - ĐỆ QUY.

// tạo các số nguyên tố nhỏ hơn hoặc bằng n
function generatePrime(n) {
  let prime = [];
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0 && i !== 2) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) prime.push(i);
  }
  return prime;
}
console.log(generatePrime(2));
console.log(generatePrime(1));
console.log(generatePrime(6));
console.log(generatePrime(13));
console.log(generatePrime(15));
console.log(generatePrime(20));
