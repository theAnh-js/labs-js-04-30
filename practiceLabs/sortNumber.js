export function sortIncreasingNumber(a, b, c) {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number")
    return -1;

  let max = Math.max(a, b, c);
  let min = Math.min(a, b, c);
  let middle;

  if ((max === a && min === b) || (max === b && min === a)) middle = c;
  if ((max === b && min === c) || (max === c && min === b)) middle = a;
  if ((max === a && min === c) || (max === c && min === a)) middle = b;

  return `${min}-${middle}-${max}`;
}
