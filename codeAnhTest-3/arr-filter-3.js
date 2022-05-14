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

function generatePrime(n) {
  let prime = [];
  for (let i = 2; i < n; i++) {
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
