function generateSpecialNumber(paramester) {
  let array = Array.from({ length: 1000 }, (u, i) => i + 1);

  let specialNumberList = array.filter((number) => {
    let digit = number.toString().split("");
    let isValid = digit.every(
      (digit) => Number(digit) >= 2 && Number(digit) <= 4
    );
    if (isValid) {
      let reservedNumber = digit.reverse().join("");
      return (
        Number(reservedNumber) === number && number.toString().length % 2 === 0
      );
    }
  });

  return specialNumberList[paramester - 1];
}

console.log(generateSpecialNumber(1)); //22
console.log(generateSpecialNumber(2)); //33
console.log(generateSpecialNumber(3)); //44

// console.log(generateSpecialNumber(4)); //2222
// console.log(generateSpecialNumber(5));
// console.log(generateSpecialNumber(6));
// console.log(generateSpecialNumber(20));

// console.log(generateSpecialNumber(6));
// console.log(generateSpecialNumber(11));
// console.log(generateSpecialNumber(12));
// console.log(generateSpecialNumber(13));
// console.log(generateSpecialNumber(14));
// console.log(generateSpecialNumber(15));
// console.log(generateSpecialNumber(16));
// console.log(generateSpecialNumber(17));

// console.log(generateSpecialNumber(10)); // 4224

///
function getNumber(number) {
  let strNumber = number.toString();

  let x = strNumber.length - 1;
  for (let i = 0; i < strNumber.length; i++) {
    if (strNumber[i] !== strNumber[x]) return false;
    x--;
  }
  return true;
}
console.log(getNumber(2224222));
console.log(getNumber(242));
console.log(getNumber(228822));
console.log(getNumber(1001));
console.log(getNumber(545));
console.log(getNumber(6666));
console.log(getNumber(2332));
console.log(getNumber(45544554));
console.log("--------------------------------");
console.log(getNumber(12345));
console.log(getNumber(1999));
console.log(getNumber(439484));
