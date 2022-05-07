export function isDecreasingNumberList(numberList) {
  if (!Array.isArray(numberList) || numberList.length < 2) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] <= numberList[i + 1]) return false;
  }
  return true;
}
