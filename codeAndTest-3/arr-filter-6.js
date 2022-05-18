export function findAllNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  return numberList.filter((number) => Number(number.toString()[0]) % 2 !== 0);
}
