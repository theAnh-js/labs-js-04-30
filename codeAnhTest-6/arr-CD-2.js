export function remove(arr, k, n) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  if (typeof k !== "number") return 0;
  if (typeof n !== "number" && n !== undefined) return 0;

  let newArray = [...arr];
  if (k < 0 || k >= arr.length) return arr;

  if (n === undefined) newArray.splice(k);
  newArray.splice(k, n);

  return newArray;
}
