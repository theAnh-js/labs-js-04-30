const PIN_LENGTH = 6;
function isValidPIN(pin) {
  // your code here ...
  if (
    typeof pin !== "number" ||
    Number.isNaN(pin) ||
    pin.toString().length !== PIN_LENGTH
  ) {
    return false;
  }
  let pinStr = pin.toString();
  let first = pinStr[0];
  let last = pinStr[pinStr.length - 1];
  //isCreasing?
  let isCreasing = true;
  if (Number(first) < Number(last)) {
    for (let i = 0; i < pinStr.length; i++) {
      if (Number(pinStr[i] > Number(pinStr[i + 1]))) isCreasing = false;
    }
  }
  //isDecreasing?
  let isDecreasing = true;
  if (Number(first) > Number(last)) {
    for (let i = 0; i < pinStr.length; i++) {
      if (Number(pinStr[i] < Number(pinStr[i + 1]))) isDecreasing = false;
    }
  }

  //frequent?
  let obj = {};
  for (let i = 0; i < pinStr.length; i++) {
    obj[pinStr[i]] === undefined ? (obj[pinStr[i]] = 1) : (obj[pinStr[i]] += 1);
    if (obj[pinStr[i]] >= 3) {
      return false;
    }
  }

  return !isCreasing || !isDecreasing;
}

console.log(isValidPIN(123456));
console.log(isValidPIN(654321));
console.log(isValidPIN(1224546754));
console.log(isValidPIN(127));
console.log(isValidPIN(111234));
console.log(isValidPIN(123333));
console.log(isValidPIN(454545));
console.log(isValidPIN(455555));
console.log(isValidPIN(433355));

console.log(isValidPIN(242643));
console.log(isValidPIN(119922));
console.log(isValidPIN(519922));
console.log(isValidPIN(184264));
