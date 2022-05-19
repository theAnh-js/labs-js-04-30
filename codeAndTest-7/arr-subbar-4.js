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
    if (convertToNumber.length >= 2) output.push(convertToNumber);
  });
  return output;
}
// console.log(findAllPositiveEvenSubArr([1, 2, 4, 3, 5, 10, 20]));
