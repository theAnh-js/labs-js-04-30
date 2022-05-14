export function findNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length <= 1) return [];

  let result = [];
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > numberList[i - 1] && !result.includes(numberList[i]))
      result.push(numberList[i]);
  }

  return result;
}

//V2
export function findNumbersV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length <= 1) return [];

  let filterArr = numberList.filter(
    (number, index, arr) => number > arr[index - 1]
  );

  let output = [];
  filterArr.forEach((number) => {
    if (!output.includes(number)) output.push(number);
  });
  return output;
}

//V3
export function findNumbersV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length <= 1) return [];

  let output = [];
  numberList.forEach((number, index, arr) => {
    if (number > arr[index - 1] && !output.includes(number))
      output.push(number);
  });

  return output;
}
