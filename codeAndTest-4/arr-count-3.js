export function countWords(wordList, n) {
  if (!Array.isArray(wordList) || wordList.length === 0) return 0;
  if (typeof n !== "number" || n <= 0) return 0;
  let count = 0;
  wordList.forEach((word) => {
    if (word.length >= n) count++;
  });
  return count;
}
