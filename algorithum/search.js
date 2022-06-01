//search by binary search without recursion:
function findPositionOfTarget(arr, target) {
  if (!Array.isArray(arr) || arr.length === 0) return -1;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = left + Math.trunc((right - left) / 2);
    if (arr[mid] === target) return mid;

    if (arr[mid] > target) right = mid - 1;
    if (arr[mid] < target) left = mid + 1;
  }
  return -1;
}

console.log(findPositionOfTarget([1, 2, 3, 4, 5, 6, 7, 8], 11));
console.log(findPositionOfTarget([1, 2, 3, 4, 5, 6, 7, 8], 1));
console.log(findPositionOfTarget([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(findPositionOfTarget([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(findPositionOfTarget([1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(findPositionOfTarget([1, 2, 3, 4, 5, 6, 7, 8], 8));
console.log(findPositionOfTarget([1, 2, 3, 4, 5, 6, 7, 8], 100));
