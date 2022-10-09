function roundSquare(n) {
  let str = n.toString();
  let result = 0;
  if (Number.isInteger(Math.sqrt(n))) {
    for (let i = 0; i < str.length; i++) {
      let num = Number(str[i]);
      console.log(num);
      result += num;
    }
  }
  if (result == 10) return true;
  return false;
}
console.log(roundSquare(361));

function sumSquare(num, n) {
  if (typeof num !== "number" || typeof n !== "number") return "input wrong";

  let i = 1;
  let result = 0;
  while (i <= n) {
    result = Math.sqrt(num + result);
    i++;
  }
  return Number.parseFloat(result.toFixed(3));
}

console.log(sumSquare(2, 1));
console.log(sumSquare(2, 2));
console.log(sumSquare(2, 3));
console.log(typeof sumSquare(2, 3));
