//#34
function chunkArray(array, size) {
  // your code here ...
  if (!Array.isArray(array) || array.length === 0) return [];
  if (size <= 0) return [];
  let output = [];
  while (array.length > 0) {
    let cutedElement = array.splice(0, size);
    output.push(cutedElement);
    if (output.length > 20) throw new Error("Too many chunks");
  }
  return output;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));

//35
function findSumPair(numberList, targetSum) {
  // your code here
  if (!Array.isArray(numberList) || numberList === 0) return [];
  let targetArr = [];
  for (let i = 0; i < numberList.length; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      if (numberList[i] + numberList[j] === targetSum) {
        if (numberList[i] < numberList[j])
          targetArr.push(numberList[i], numberList[j]);
        if (numberList[i] > numberList[j] || numberList[i] === numberList[j])
          targetArr.push(numberList[j], numberList[i]);
      }
    }
  }
  return targetArr.splice(0, 2);
}
console.log(findSumPair([2, 3, 1, 4, 0], 4));
console.log(findSumPair([2, 2, 1, 4, 0], 4));

//v2 ngắn dễ hiểu hơn.
function findSumPairV2(numberList, targetSum) {
  // your code here
  if (!Array.isArray(numberList) || numberList === 0) return [];
  let targetArr = [];
  for (let i = 0; i < numberList.length; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      if (numberList[i] + numberList[j] === targetSum)
        targetArr.push(numberList[i], numberList[j]);
    }
  }
  return targetArr.splice(0, 2).sort((a, b) => a - b);
}
console.log(findSumPairV2([2, 3, 1, 4, 0], 4));
console.log(findSumPairV2([2, 2, 1, 4, 0], 4));

//36
function findFirstDuplicate(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;
  let output = -1;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] === numberList[i + 1]) {
      output = numberList[i];
      break;
    }
  }
  return output;
}
console.log(findFirstDuplicate([1, 1, 2, 2, 3, 4, 5]));

//37
function validMountainArray(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length < 3) return false;

  let maxNum = numberList[0];
  numberList.forEach((num) => {
    if (maxNum < num) maxNum = num;
  });

  let firstArr;
  let rest;
  numberList.forEach((num, index) => {
    if (num === maxNum) {
      firstArr = numberList.slice(0, index);
      rest = numberList.slice(index + 1);
    }
  });
  if (firstArr.length === 0 || rest.length === 0) return false;

  for (let i = 0; i < firstArr.length - 1; i++) {
    console.log(firstArr[i], firstArr[i + 1]);
    if (firstArr[i] >= firstArr[i + 1]) return false;
  }
  for (let i = 0; i < rest.length - 1; i++) {
    console.log(rest[i], rest[i + 1]);
    if (rest[i] <= rest[i + 1]) return false;
  }
  return true;
}
console.log(validMountainArray([1, 2, 3, 4, 5, 5, 4, 3, 2, 1]));
console.log(validMountainArray([0, 3, 2, 1]));
console.log(validMountainArray([3, 5, 5]));
console.log(validMountainArray([0, 1, 2]));

let text = "Mozilla";
console.log(text.substring(-5, 2)); // => "Mo"
console.log(text.substring(0, 2)); // => "Mo"

console.log(text.slice(-5, 2)); // => ""
console.log(text.slice(2, 2)); // => ""
console.log(text.slice(-5, -2)); // => "zil"

console.log(text.slice(5, 2)); // => ""
console.log(text.substring(5, 2)); // => "zil"
