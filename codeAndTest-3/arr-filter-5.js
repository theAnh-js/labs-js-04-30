export function findAllNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length <= 1) return [];

  let isEven = numberList.filter((number) => number % 2 === 0);
  let rest = isEven.slice(1);
  return rest.filter((number) => number === isEven[0]);
}
