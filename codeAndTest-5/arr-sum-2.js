export function sumAllDigits(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let digit = numberList.join("").split("");
  return digit.reduce((acc, curr) => acc + Number(curr), 0);
}
