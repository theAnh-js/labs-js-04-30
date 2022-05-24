export function findMissingNumber(numberList, n) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  let arr = Array.from({ length: n - 5 + 1 }, (u, index) => index + 5);

  return arr.find((number) => !numberList.includes(number));
}
