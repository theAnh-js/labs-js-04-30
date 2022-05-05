//v1
export function hasOddNumberDivisibleBy3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  return numberList.some((number) => number % 3 === 0 && number % 2 === 1);
}
//v2
export function hasOddNumberDivisibleBy3V2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  return numberList.some((number) => number % 3 === 0 && number % 2 !== 0);
}
