export function findSumPair(numberList, targetSum) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let sumArr = [];
  for (let i = 0; i < numberList.length; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      if (numberList[i] + numberList[j] === targetSum) {
        sumArr.push(numberList[i], numberList[j]);
        break; //chỉ lấy 1 cặp.
      }
    }
    if (sumArr.length === 2) break; //chỉ lấy 1 cặp
  }
  return sumArr.sort((a, b) => a - b);
}

console.log(findSumPair([9, 5, 3, 4, 8, 1], 9));
console.log(findSumPair([3, 2, 1, 4, 6, 8, 1], 4)); // phải break cả trong for thứ 2 nếu trong this test case
