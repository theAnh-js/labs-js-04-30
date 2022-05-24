// export function findAllNumbers(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return [];
//   return numberList.filter((number) => {
//     if (number.toString()[0] === "-") {
//       return Number(number.toString()[1]) % 2 !== 0;
//     } else {
//       return Number(number.toString()[0]) % 2 !== 0;
//     }
//   });
// }

//V2
export function findAllNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  return numberList.filter(
    (number) => Number(Math.abs(number).toString()[0]) % 2 !== 0
  );
}
