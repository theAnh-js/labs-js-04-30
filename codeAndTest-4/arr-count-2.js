export function countNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length <= 1) return 0;
  let count = 0;
  numberList.forEach((number, index, arr) => {
    if (arr[index + 1] < number) count++;
  });
  return count;
}
