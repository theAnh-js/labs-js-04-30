export function sumEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let validEven = numberList.filter(
    (number, index, array) => number % 2 === 0 && number > array[index - 1]
  );
  return validEven.reduce((acc, even) => acc + even, 0);
}
