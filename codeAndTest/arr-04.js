//v1
/**
  export function hasTruthy(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return false;

  return arr.some((value) => Boolean(value) === true);
}
*/

//v2
export function hasTruthy(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return false;

  return arr.some((value) => !!value === true);
}
