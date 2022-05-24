export function statisticsNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return {};

  let result = {};
  let count = 1;
  for (let i = 0; i < numberList.length; i++) {
    count = 1;
    for (let j = i + 1; j < numberList.length; j++) {
      if (numberList[i] === numberList[j]) count++;
    }
    //way 3:
    if (!result.hasOwnProperty(numberList[i])) {
      result[numberList[i]] = count;
    }

    //way 1:
    //      if (!Object.keys(result).includes(numberList[i].toString())) {
    //           result[numberList[i]] = count;
    //      }

    //way 2:
    //      if (!(numberList[i] in result)) {
    //          result[numberList[i]] = count;
    //      }
  }
  return result;
}
console.log(statisticsNumbers([1, 1, 1, 2, 2, 3]));
