export function isSubArray(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length === 0) return true;
  if (a.length > b.length) return false;

  let strA = a.join("");
  let strB = b.join("");
  return strB.includes(strA);
}
