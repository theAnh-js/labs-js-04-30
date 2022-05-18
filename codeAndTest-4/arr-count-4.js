export function countUniqueNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  let arr = [];
  numberList.forEach((number) => {
    if (!arr.includes(number)) arr.push(number);
  });
  return arr.length;
}
