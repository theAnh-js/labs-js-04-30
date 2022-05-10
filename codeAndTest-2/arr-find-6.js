export function findLastPerfectSquare(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let perfectSquare = numberList.filter((number) =>
    Number.isInteger(Math.sqrt(number))
  );
  return perfectSquare[perfectSquare.length - 1];
}
