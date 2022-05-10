//v1
export function findLastNegativeOdd(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let reversedList = numberList.reverse();
  return reversedList.find((number) => number < 0 && number % 2 !== 0);
}

//V2
export function findLastNegativeOddV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let reversedList = [];
  numberList.forEach((number) => {
    if (number < 0 && number % 2 !== 0) reversedList.unshift(number);
  });
  return reversedList[0]; // nếu push thì reversedList[reversedList.length - 1];
}
