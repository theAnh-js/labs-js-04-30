//v1
export function countNumbersNotInB(a, b) {
  if (!Array.isArray(a) || a.length === 0) return 0;
  if (!Array.isArray(b) || b.length === 0) return 0;

  let common = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) common.push(a[i]);
    }
  }
  let notCommon = a.filter((number) => !common.includes(number));
  return notCommon.length;
}

//V2
export function countNumbersNotInBV2(a, b) {
  if (!Array.isArray(a) || a.length === 0) return 0;
  if (!Array.isArray(b) || b.length === 0) return 0;

  let notCommon = a.filter((number) => !b.includes(number));
  return notCommon.length;
}
