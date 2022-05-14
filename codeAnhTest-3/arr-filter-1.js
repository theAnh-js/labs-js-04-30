export function generateNumberInRange(a, b) {
  if (typeof a !== "number" || typeof b !== "number" || a >= b) return [];

  let result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  return result;
}

//V2
export function generateNumberInRangeV2(a, b) {
  if (typeof a !== "number" || typeof b !== "number" || a >= b) return [];

  let arr = Array.from({ length: b + 1 }, (u, index) => index + a);
  return arr.filter((number) => number <= b);
}
console.log(generateNumberInRange(4, 6));
console.log(generateNumberInRange(0, 6));
