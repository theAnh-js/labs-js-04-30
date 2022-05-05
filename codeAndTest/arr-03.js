export function hasEasyFrontend(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return false;

  let newWordList = [];
  wordList.forEach((word) => {
    if (word.includes("easy") || word.includes("frontend"))
      newWordList.push(word);
  });

  let wordStr = newWordList.join("");
  if (!wordStr.includes("easy") || !wordStr.includes("frontend")) return false;

  return true;
}
