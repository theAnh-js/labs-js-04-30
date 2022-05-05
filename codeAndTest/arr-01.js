//v1
export function hasEvenNumberGreaterThanN(numberList, n) {
  if (numberList.length === 0) return false;
  for (let i = 0; i < numberList.length; i++) {
    if (typeof numberList[i] !== "number") return false;
  }
  if (typeof n !== "number") return false;

  return numberList.some((number) => {
    return number % 2 === 0 && number > n;
  });
}

//V2
export function hasEvenNumberGreaterThanNV2(numberList, n) {
  if (numberList.length === 0) return false;
  for (let i = 0; i < numberList.length; i++) {
    if (typeof numberList[i] !== "number") return false;
  }
  if (typeof n !== "number") return false;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0 && numberList[i] > n) return true;
  }
  return false;
}

//V3
export function hasEvenNumberGreaterThanNV3(numberList, n) {
  if (numberList.length === 0) return false;
  for (let i = 0; i < numberList.length; i++) {
    if (typeof numberList[i] !== "number") return false;
  }
  if (typeof n !== "number") return false;

  let findNum = numberList.find((number) => number % 2 === 0 && number > n);
  if (findNum) return true;
  return false;
}

//V4
export function hasEvenNumberGreaterThanNV4(numberList, n) {
  if (numberList.length === 0) return false;
  for (let i = 0; i < numberList.length; i++) {
    if (typeof numberList[i] !== "number") return false;
  }
  if (typeof n !== "number") return false;

  let findNum = numberList.filter((number) => number % 2 === 0 && number > n);
  if (findNum.length > 0) return true;
  return false;
}
