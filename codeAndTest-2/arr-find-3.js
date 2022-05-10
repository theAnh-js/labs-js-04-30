export function findFirstPositiveEven(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  return numberList.find((number) => number > 0 && number % 2 === 0);
}
