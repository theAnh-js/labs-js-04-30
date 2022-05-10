export function findMinPositive(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let positiveList = [];

  numberList.forEach((number) => {
    if (number > 0) positiveList.push(number);
  });

  let min = positiveList[0];
  positiveList.forEach((number) => {
    if (min > number) min = number;
  });

  return min;
}

//v2
export function findMinPositiveV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let positiveList = numberList.filter((number) => number > 0);

  let min = positiveList[0];
  positiveList.forEach((number) => {
    if (min > number) min = number;
  });

  return min;
}
