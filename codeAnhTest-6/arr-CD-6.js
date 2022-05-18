export function uniqueArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let output = [];
  numberList.forEach((number) => {
    if (!output.includes(number)) output.push(number);
  });
  return output;
}
