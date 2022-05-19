export function findAllDecreasingSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  const arr = [];
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] >= numberList[i - 1]) arr.push("||");
    arr.push(numberList[i]);
  }
  let joinedArr = arr.join(" ");
  let splitedArr = joinedArr.split("||");
  const result = [];
  splitedArr.forEach((groupNum) => {
    let splitedGroup = groupNum.split(" ");
    let filtered = splitedGroup.filter((char) => char !== "");
    let converToNumber = filtered.map((char) => Number(char));
    if (converToNumber.length > 2) result.push(converToNumber);
  });
  return result;
}

findAllDecreasingSubArr([3, 2, 1, 5, 15, 10, 5, 20, 19]);
// findAllDecreasingSubArr([3, 2, 1, 15, 10, 5, 20, 19, 18, 17, 90, 89]);
