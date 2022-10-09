//挿入ソート：
function insertSort(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return "Not invalid parameter";

  let temp;
  for (let i = 1; i < arr.length; i++) {
    temp = arr[i];

    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
      } else break;
    }

    arr[j + 1] = temp;
  }
  return arr;
}
console.log(insertSort([2, 6, 4, 8, 2, 4, 100]));
console.log(insertSort([9, 8, 4, 3, 6, 2, 5, 1]));
