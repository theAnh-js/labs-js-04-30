export function findAllIncreasingSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] <= numberList[i - 1]) numberList[i] = "sparate";
  }

  console.log(numberList); //[ 1, 2, 3, 'sparate', -10, 5, 10, 'sparate', 4, 6, 9 ]
  let strGrounp = numberList.join(" "); //1 2 3 sparate -10 5 10 sparate 4 6 9
  let splitGrounp = strGrounp.split("sparate"); //[ '1 2 3 ', ' -10 5 10 ', ' 4 6 9' ]

  let result = [];
  splitGrounp.forEach((group) => {
    let splitGroup = group.split(" ");
    let removeSpace = splitGroup.filter((char) => char !== "");
    let toNum = removeSpace.map((char) => Number(char));
    if (toNum.length >= 2) result.push(toNum);
  });
  return result;
}
console.log(findAllIncreasingSubArr([1, 2, 3, -5, -10, 5, 10, 2, 4, 6, 9]));
