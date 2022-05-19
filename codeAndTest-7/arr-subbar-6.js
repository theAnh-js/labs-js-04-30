export function findMaxSumArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  const newArray = [];
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] <= numberList[i - 1]) newArray.push("||");
    newArray.push(numberList[i]);
  }

  let joinedArr = newArray.join(" ");
  let splitBySeparator = joinedArr.split("||");
  const subbarArr = [];
  splitBySeparator.forEach((element) => {
    let splitEle = element.split(" ");
    let fliterSpace = splitEle.filter((ele) => ele !== "");
    let toNumber = fliterSpace.map((ele) => Number(ele));
    if (toNumber.length >= 3) subbarArr.push(toNumber);
  });

  const sumOfSub = [];
  subbarArr.forEach((subbar) => {
    let sum = subbar.reduce((acc, subbar) => acc + subbar, 0);
    sumOfSub.push(sum);
  });
  let maxSum = sumOfSub[0];
  sumOfSub.forEach((sum) => {
    if (sum > maxSum) maxSum = sum;
  });
  //way 1
  let indexOfMax = sumOfSub.findIndex((sum) => sum === maxSum);
  return subbarArr[indexOfMax];

  //way 2 (bị lặp lại phần sum nên ưu tiên way 11)
  //   return subbarArr.find((subbar) => {
  //     let sum = subbar.reduce((acc, subbar) => acc + subbar, 0);
  //     return sum === maxSum;
  //   });
}
