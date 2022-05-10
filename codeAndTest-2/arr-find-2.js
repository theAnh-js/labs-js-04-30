//v1
export function findLongestWord(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return "";
  let filterArr = wordList.filter(
    (word) => word.length < 5 && !word.includes(" ") && word !== ""
  );

  let maxWord = filterArr[0];
  filterArr.forEach((word) => {
    if (maxWord.length < word.length) maxWord = word;
  });
  return maxWord || "";
}

// Wrong:

// //V2
// export function findLongestWordV2(wordList) {
//   if (!Array.isArray(wordList) || wordList.length === 0) return "";
//   let filterArr = wordList.filter(
//     (word) => word.length < 5 && !word.includes(" ") && word !== ""
//   );

//   if (filterArr.length === 0) filterArr = [""];

//   let maxWord = filterArr[0];
//   let output = filterArr.find((word) => maxWord.length < word.length);

//   return output || maxWord;
// }

// //V3
// export function findLongestWordV3(wordList) {
//   if (!Array.isArray(wordList) || wordList.length === 0) return "";
//   let filterArr = wordList.filter(
//     (word) => word.length < 5 && !word.includes(" ") && word !== ""
//   );

//   if (filterArr.length === 0) return "";

//   let maxWord = filterArr[0];
//   let output = filterArr.find((word) => maxWord.length < word.length);

//   return output || maxWord;
// }
