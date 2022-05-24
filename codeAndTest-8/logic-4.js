export function findMostFrequentNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  const obj = {};
  let count = 1;
  for (let i = 0; i < numberList.length; i++) {
    count = 1;
    for (let j = i + 1; j < numberList.length; j++) {
      if (numberList[i] === numberList[j]) count++;
    }
    if (!obj.hasOwnProperty(numberList[i])) obj[numberList[i]] = count;
  }

  let maxKey = undefined;
  for (let key in obj) {
    if (maxKey === undefined || obj[key] > obj[maxKey]) {
      maxKey = key;
    }
  }
  return Number(maxKey);
}

console.log(findMostFrequentNumber([1, 2, 3, 2]));
console.log(findMostFrequentNumber([1]));

//V2
export function findMostFrequentNumberV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let obj = {};
  let maxKey = undefined;

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];
    obj[number] = obj[number] === undefined ? 1 : obj[number] + 1;

    if (maxKey === undefined || obj[number] > obj[maxKey]) {
      maxKey = number;
    }
  }

  return Number.parseInt(maxKey);
}

console.log(findMostFrequentNumberV2([1, 2, 3, 2, 2, 2, 3, 3]));
