//v1

export function isSymmetricList(numberList) {
  if (!Array.isArray(numberList) || numberList.length < 1) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] !== numberList[numberList.length - (i + 1)]) return false;
  }
  return true;
}

// V2
export function isSymmetricListV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length < 1) return false;

  let strNumber = numberList.join("");
  let reversedStr = numberList.reverse().join("");

  return strNumber === reversedStr;
}
