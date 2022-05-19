//v1
export function sumAllMinDigits(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  let result = 0;
  numberList.forEach((number) => {
    let digitArr = number.toString().split("");
    let minDigit = digitArr[0];
    digitArr.forEach((digit) => {
      if (minDigit > digit) minDigit = digit;
    });
    result += Number(minDigit);
  });
  return result;
}
