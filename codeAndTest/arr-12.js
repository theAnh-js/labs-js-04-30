function generateFibonace() {
  //create arr [0,1]
  let createList = Array.from({ length: 2 }, (u, index) => index);

  for (let i = 0; i < createList.length; i++) {
    let sum = createList[i] + createList[i + 1];
    if (sum < 100) createList.push(sum);
  }
  return createList;
}
// console.log(generateFibonace());

export function hasFibonaciNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  return numberList.some((number) => generateFibonace().includes(number));
}
