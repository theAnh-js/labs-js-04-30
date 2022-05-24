export function findAllPositiveEvenSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let separatedArr = [];
  numberList.forEach((num) => {
    if (num % 2 !== 0) num = "||";
    separatedArr.push(num);
  });

  let joinedElement = separatedArr.join(" ");
  let splitBySeparator = joinedElement.split("||");

  let output = [];
  splitBySeparator.forEach((element) => {
    let splitElement = element.split(" ");
    let filterSpace = splitElement.filter((ele) => ele !== "");
    let convertToNumber = filterSpace.map((value) => Number(value));
    if (convertToNumber.length >= 1) output.push(convertToNumber);
  });
  return output;
}
// console.log(findAllPositiveEvenSubArr([1, 2, 4, 3, 5, 10, 20]));

//V2
export function findAllPositiveEvenSubArrV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let subArrayList = [];
  let subArray = [];

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];
    if (number % 2 === 0) subArray.push(number);

    let needToReset = number % 2 === 1 || i === numberList.length - 1;
    if (subArray.length > 0 && needToReset) {
      subArrayList.push(subArray);
      subArray = [];
    }
  }
  return subArrayList;
}
