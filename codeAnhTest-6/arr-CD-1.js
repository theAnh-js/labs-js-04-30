export function insert(arr, newItem, k) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  if (typeof k !== "number") return 0;

  let newArr = [...arr];

  if (k > newArr.length) {
    newArr.push(newItem);
  } else if (k <= 0) newArr.unshift(newItem);
  else newArr.splice(k, 0, newItem);
  console.log(arr);
  console.log(newArr);
  return newArr;
}
