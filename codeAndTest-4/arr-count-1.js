export function countPositiveEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  let count = 0;
  numberList.forEach((number) => {
    if (number > 0 && number % 2 === 0) count++;
  });
  return count;
}
