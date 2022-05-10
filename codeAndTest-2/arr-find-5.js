export function findSecondLargestNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length <= 1) return undefined;

  let maxNumber = numberList[0];
  numberList.forEach((number) => {
    if (number > maxNumber) maxNumber = number;
  });

  let newList = numberList.filter((number) => number < maxNumber);

  let secondMax = newList[0];
  newList.forEach((number) => {
    if (secondMax < number) secondMax = number;
  });
  return secondMax;
}

export function findSecondLargestNumberV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length <= 1) return undefined;

  let maxNumber = numberList[0];
  numberList.forEach((number) => {
    if (number > maxNumber) maxNumber = number;
  });

  let newList = [];
  numberList.forEach((number) => {
    if (number < maxNumber) newList.push(number);
  });

  let secondMax = newList[0];
  newList.forEach((number) => {
    if (secondMax < number) secondMax = number;
  });
  return secondMax;
}
