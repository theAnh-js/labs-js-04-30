export function findMaxSumArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  let newArr = [];
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] <= numberList[i - 1]) newArr.push("||");
    newArr.push(numberList[i]);
  }

  let joinedArr = newArr.join(" ");
  let splitedBySeparators = joinedArr.split("||");

  let sumArr = [];
  splitedBySeparators.forEach((element) => {
    let splitElement = element.split(" ");
    let filterSpace = splitElement.filter((element) => element !== "");
    let converToNumber = filterSpace.map((element) => Number(element));
    let sumIncreasing = converToNumber.reduce(
      (sum, element) => sum + element,
      0
    );
    if (converToNumber.length >= 3) sumArr.push(sumIncreasing);
  });

  let maxElement = sumArr[0];
  sumArr.forEach((element) => {
    if (element > maxElement) maxElement = element;
  });
  return maxElement;
}
// console.log(findMaxSumArray([1, 2, 3, 2, 10, 20, 5, 8]));
