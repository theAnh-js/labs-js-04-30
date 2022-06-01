function partition(numberList, left, right) {
  const mid = left + Math.trunc((right - left) / 2);
  const pivot = numberList[mid];

  let i = left;
  let j = right;
  while (i <= j) {
    while (numberList[i] < pivot) i++;

    while (numberList[j] > pivot) j--;

    if (i < j) {
      const temp = numberList[i];
      numberList[i] = numberList[j];
      numberList[j] = temp;
    }
    //must have, if no -> inf loop
    if (i <= j) {
      i++;
      j--;
    }
  }
  return i;
}
function quickSort(numberList, left, right) {
  //base condition/termination pointer
  if (left >= right) return numberList;

  const pivotPositions = partition(numberList, left, right);

  quickSort(numberList, left, pivotPositions - 1);
  quickSort(numberList, pivotPositions, right);

  return numberList;
}

console.log(quickSort([4, 2, 3], 0, 2));
// 4 2 3
/**
 * 4 2 3
 * i   j      mid = 1 => pivot = 2
 * i j
 * 2 4 3 wrap 
 * j i   return i = 1
  quickSort(numberList, left, 1 - 1); -> left === right = 1 -> khong lam gi ca
  quickSort(numberList, 1, 2);
  2 4 3  
    i j     mid = 1 + Math.trunc((2 - 1)/2) = 1 => pivot = numberList[1] = 4;
  2 3 4     vì i < j nên lại hoán đổi 
    j i
 lúc này i = 2; j = 1  => i > j ket thuc chuong trinh.
 * 
=*/

console.log(quickSort([1], 0, 0));
console.log(quickSort([1, 2], 0, 1));
console.log(quickSort([1, 2, 1], 0, 2));
console.log(quickSort([1, 2, 1, 3], 0, 3));
console.log(quickSort([4, 1, 2, 5], 0, 3));
console.log(quickSort([4, 2, 6, 5, 3, 9], 0, 5));

// Create DECREASING QUICKSORT:
function partition(numberList, left, right) {
  const mid = left + Math.trunc((right - left) / 2);
  const pivot = numberList[mid];

  let i = left;
  let j = right;
  while (i <= j) {
    while (numberList[i] > pivot) i++;

    while (numberList[j] < pivot) j--;

    if (i < j) {
      const temp = numberList[i];
      numberList[i] = numberList[j];
      numberList[j] = temp;
    }
    //must have, if no -> inf loop
    if (i <= j) {
      i++;
      j--;
    }
  }
  return i;
}
function quickSortDereade(numberList, left, right) {
  //base condition/termination pointer
  if (left >= right) return numberList;

  const pivotPositions = partition(numberList, left, right);

  quickSortDereade(numberList, left, pivotPositions - 1);
  quickSortDereade(numberList, pivotPositions, right);

  return numberList;
}
console.log(quickSortDereade([1], 0, 0));
console.log(quickSortDereade([1, 2], 0, 1));
console.log(quickSortDereade([1, 2, 1], 0, 2));
console.log(quickSortDereade([1, 2, 1, 3], 0, 3));
console.log(quickSortDereade([4, 1, 2, 5], 0, 3));
console.log(quickSortDereade([4, 2, 6, 5, 3, 9], 0, 5));

// sort method
console.log(
  ["a", "f", "b", "sc", "c", "t", "s", "w", "d", "gh"].sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  })
);
console.log(["a", "f", "b", "sc", "c", "t", "s", "w", "d", "gh"].sort());
