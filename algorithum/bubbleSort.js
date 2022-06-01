const { number } = require("yargs");

// increasedSort
function createBubbleSort(numberList) {
  for (let i = numberList.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (numberList[j] > numberList[j + 1]) {
        let temp = numberList[j];
        numberList[j] = numberList[j + 1];
        numberList[j + 1] = temp;
      }
    }
  }
  return numberList;
}
console.log(createBubbleSort([1, 5, 7, 5, 3, 35]));
console.log(createBubbleSort([0, 5, 3]));
console.log(createBubbleSort([9, 8, 19]));

//decreasedSort

function createDecreasedSort(numberList) {
  for (let i = numberList.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (numberList[j] < numberList[j + 1]) {
        let temp = numberList[j];
        numberList[j] = numberList[j + 1];
        numberList[j + 1] = temp;
      }
    }
  }
  return numberList;
}
console.log(createDecreasedSort([1, 5, 7, 5, 3, 35]));
console.log(createDecreasedSort([0, 5, 3]));
console.log(createDecreasedSort([9, 8, 19]));
