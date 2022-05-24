// export function countUniqueNumbers(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return 0;
//   let arr = [];
//   numberList.forEach((number) => {
//     if (!arr.includes(number)) arr.push(number);
//   });
//   return arr.length;
// }

//V2
// export function countUniqueNumbers(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return 0;

//   let flag = {};
//   for (let i = 0; i < numberList.length; i++) {
//     let number = numberList[i];
//     flag[number] = true;
//   }
//   return Object.keys(flag).length;
// }

//V3
export function countUniqueNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let obj = numberList.reduce((flag, number) => {
    flag[number] = true;
    return flag;
  }, {});
  return Object.keys(obj).length;
}
