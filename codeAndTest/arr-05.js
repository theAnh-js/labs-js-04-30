export function hasFalsy(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return false;

  return arr.some((value) => !Boolean(value));
}
