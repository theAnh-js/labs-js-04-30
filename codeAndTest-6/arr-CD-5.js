export function removeDuplicatedNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let newArray = [];
  for (let i = 0; i < numberList.length; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      if (numberList[i] === numberList[j]) newArray.push(numberList[i]);
    }
  }
  let isOnlyOne = numberList.every((number) => number === numberList[0]);
  if (isOnlyOne) return [].concat(numberList[0]);
  return numberList.filter((number) => !newArray.includes(number));
}
