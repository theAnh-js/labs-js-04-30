export function generatePrimeNumbers(n) {
  if (!Number(n) || n <= 0 || n >= 1000 || !Number.isInteger(n)) return [];

  let result = [];
  for (let i = 2; i < n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0 && i !== 2) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) result.push(i);
  }
  return result;
}
