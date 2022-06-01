function binarySearch(studentList, searchName) {
  // your code here
  if (!Array.isArray(studentList) || studentList.length === 0) return -1;
  if (
    typeof searchName !== "string" ||
    searchName.length === 0 ||
    searchName === " " ||
    !searchName
  )
    return -1;

  let left = 0;
  let right = studentList.length - 1;

  while (left <= right) {
    let mid = left + Math.trunc((right - left) / 2);

    let formatedName = studentList[mid].name.trim().toLowerCase();
    let formatedSearchName = searchName.trim().toLowerCase();

    if (formatedName === formatedSearchName) return mid;
    if (formatedName > formatedSearchName) right = mid - 1;
    if (formatedName < formatedSearchName) left = left + 1;
  }

  return -1;
}

console.log(
  binarySearch(
    [
      { id: 1, name: "Alice" },
      { id: 2, name: "Blice" },
      { id: 3, name: "Jlice" },
    ],
    "lice"
  )
);
