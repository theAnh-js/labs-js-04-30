export function insert(numberList, newNumber) {
  if (!Array.isArray(numberList)) return [];
  if (typeof newNumber !== "number") return [];

  const newArr = [...numberList, newNumber];
  return newArr.sort((a, b) => a - b);
}

//V2
/** 
 * 
 export function insert(numberList, newNumber) {
   if (!Array.isArray(numberList)) return [];
   if (typeof newNumber !== "number") return [];
 
   numberList.push(newNumber);
   return numberList.sort((a, b) => a - b);
 }
*/
