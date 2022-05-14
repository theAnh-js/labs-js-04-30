// DO NOT USE HARDCODE NUMBER IN YOUR CODE
const K500_QUANTITY = 2;
const K200_QUANTITY = 5;
const K100_QUANTITY = 10;
const K50_QUANTITY = 100;

const K500_VALUE = 500000;
const K200_VALUE = 200000;
const K100_VALUE = 100000;
const K50_VALUE = 50000;

const BASE_UNIT = 50000;

function withdraw(amount) {
  // your code here
  if (!Number(amount)) return null;
  if (amount % BASE_UNIT !== 0) return "Invalid balance";
  if (
    amount >
    K500_VALUE * K500_QUANTITY +
      K200_VALUE * K200_QUANTITY +
      K100_VALUE * K100_QUANTITY +
      K50_VALUE * K50_QUANTITY
  )
    return "Insufficient balance from ATM";

  let output = {};

  //amount >= K500_VALUE
  if (amount >= K500_VALUE) {
    if (amount < K500_VALUE * 2) {
      output["k500"] = K500_QUANTITY - 1;

      let rest1 = amount - K500_VALUE;

      if (rest1 >= K200_VALUE) {
        output["k200"] = Math.trunc(rest1 / K200_VALUE);

        let rest2 = rest1 - K200_VALUE;
        if (rest2 >= K100_VALUE) {
          output["k100"] = Math.trunc(rest2 / K100_VALUE);
          let rest3 = rest2 - K100_VALUE;
          output["k50"] = Math.trunc(rest3 / K50_VALUE);
        }
        if (rest2 < K100_VALUE) {
          output["k100"] = 0;
          output["k50"] = Math.trunc(rest2 / K50_VALUE);
        }
      }

      if (rest1 < K200_VALUE) {
        output["k200"] = 0;

        if (rest1 >= K100_VALUE) {
          output["k100"] = Math.trunc(rest1 / K100_VALUE);
          let rest5 = rest1 - K100_VALUE;
          output["k50"] = Math.trunc(rest5 / K50_VALUE);
        }

        if (rest1 < K100_VALUE) {
          output["k100"] = 0;
          output["k50"] = Math.trunc(rest1 / K50_VALUE);
        }
      }
    }

    if (amount >= K500_VALUE * 2) {
      let acount500 = Math.trunc(amount / K500_VALUE);

      //less than 1500000
      if (acount500 === 2) {
        output["k500"] = K500_QUANTITY;
        let rest1 = amount - K500_VALUE * 2;
        if (rest1 >= K200_VALUE) {
          output["k200"] = Math.trunc(rest1 / K200_VALUE);

          let rest2 = rest1 - K200_VALUE * Math.trunc(rest1 / K200_VALUE);
          if (rest2 >= K100_VALUE) {
            output["k100"] = Math.trunc(rest2 / K100_VALUE);
            let rest3 = rest2 - K100_VALUE;
            output["k50"] = Math.trunc(rest3 / K50_VALUE);
          }
          if (rest2 < K100_VALUE) {
            output["k100"] = 0;
            output["k50"] = Math.trunc(rest2 / K50_VALUE);
          }
        }

        if (rest1 < K200_VALUE) {
          output["k200"] = 0;

          if (rest1 >= K100_VALUE) {
            output["k100"] = Math.trunc(rest1 / K100_VALUE);
            let rest5 = rest1 - K100_VALUE;
            output["k50"] = Math.trunc(rest5 / K50_VALUE);
          }

          if (rest1 < K100_VALUE) {
            output["k100"] = 0;
            output["k50"] = Math.trunc(rest1 / K50_VALUE);
          }
        }
      }

      // equal to 1500000 or greater .
      if (acount500 >= 3) {
        output["k500"] = K500_QUANTITY;
        let rest1 = amount - K500_VALUE * K500_QUANTITY;
        let amount200 = Math.trunc(rest1 / K200_VALUE);
        if (amount200 <= 5) {
          output["k200"] = amount200;
          let rest2 = rest1 - K200_VALUE * amount200;
          output["k100"] = Math.trunc(rest2 / K100_VALUE);
          let rest3 = rest2 - K100_VALUE * Math.trunc(rest2 / K100_VALUE);
          output["k50"] = Math.trunc(rest3 / K50_VALUE);
        }

        if (amount200 > 5) {
          output["k200"] = K200_QUANTITY;
          let rest2 = rest1 - K200_VALUE * K200_QUANTITY;
          let amount100 = Math.trunc(rest2 / K100_VALUE);
          if (amount100 <= 10) {
            output["k100"] = amount100;
            let rest3 = rest2 - K100_VALUE * amount100;
            output["k50"] = Math.trunc(rest3 / K50_VALUE);
          }
          if (amount > 10) {
            output["k100"] = K100_QUANTITY;
            let rest3 = rest2 - K100_VALUE * K100_QUANTITY;
            output["k50"] = Math.trunc(rest3 / K50_VALUE);
          }
        }
      }
    }
  }

  // amount < 500;
  if (amount < K500_VALUE) {
    output["k500"] = 0;
    if (amount >= K200_VALUE) {
      output["k200"] = Math.trunc(amount / K200_VALUE);

      let rest2 = amount - K200_VALUE * Math.trunc(amount / K200_VALUE);
      if (rest2 >= K100_VALUE) {
        output["k100"] = Math.trunc(rest2 / K100_VALUE);
        let rest3 = rest2 - K100_VALUE;
        output["k50"] = Math.trunc(rest3 / K50_VALUE);
      }
      if (rest2 < K100_VALUE) {
        output["k100"] = 0;
        output["k50"] = Math.trunc(rest2 / K50_VALUE);
      }
    }

    if (amount < K200_VALUE) {
      output["k200"] = 0;

      if (amount >= K100_VALUE) {
        output["k100"] = Math.trunc(amount / K100_VALUE);
        let rest5 = amount - K100_VALUE;
        output["k50"] = Math.trunc(rest5 / K50_VALUE);
      }

      if (amount < K100_VALUE) {
        output["k100"] = 0;
        output["k50"] = Math.trunc(amount / K50_VALUE);
      }
    }
  }

  return output;
}
console.log(withdraw(50000));
console.log(withdraw(100000));
console.log(withdraw(200000));
console.log(withdraw(250000));
console.log(withdraw(350000));
console.log(withdraw(400000));
console.log("-------------------------------");
console.log(withdraw(550000));
console.log(withdraw(600000));
console.log(withdraw(700000));
console.log(withdraw(750000));
console.log(withdraw(650000));
console.log(withdraw(800000));
console.log(withdraw(950000));
console.log("--------------------------------");
console.log(withdraw(1000000));
console.log(withdraw(1200000));
console.log(withdraw(1300000));
console.log(withdraw(1400000));
console.log("--------------------------------");
console.log(withdraw(1800000));
console.log(withdraw(2000000));
console.log(withdraw(3000000));
console.log(withdraw(5000000));
console.log(withdraw(6000000));
console.log(withdraw(7000000));
console.log(withdraw(7500000));
console.log(withdraw(8000000));

//v1
function uniqueLetters(str) {
  let isDuplicate = 0;
  let x = "";
  for (let i = 0; i < str.length; i++) {
    isDuplicate = 0;
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) isDuplicate++;
    }
    if (isDuplicate > 0) x += str[i];
  }
  let y = [...str].filter((str) => !x.includes(str));
  return y.join("");
}
console.log(uniqueLetters("ffrontend"));
console.log(uniqueLetters("frrontededdfdnn"));
console.log(uniqueLetters("abc"));
console.log(uniqueLetters("aacbsddsdcec"));

//v2
function uniqueLettersV2(str) {
  let duplicate = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) duplicate += str[i];
    }
  }
  let result = [...str].filter((str) => !duplicate.includes(str));
  return result.join("");
}
console.log(uniqueLettersV2("ffrontend"));
console.log(uniqueLettersV2("frrontededdfdnn"));
console.log(uniqueLettersV2("abc"));
console.log(uniqueLettersV2("aacbsd dsdcec"));

//#28
function countWords(str) {
  // your code here
  if (str === "") return 0;
  let splitStr = str.split(" ");
  console.log(splitStr);
  let filterStr = splitStr.filter((char) => char !== "");
  console.log(filterStr);
  return filterStr.length;
}
console.log(countWords("  front  end    javascript"));

//#29
function mergeArray(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return [];

  //vì khi 1 trong 2 mảng trống ta phải return về mảng còn lại theo yêu cầu đề bài.
  // Nên chỉ khi cả 2 mảng đều trống ta mởi return ra [].
  if (a.length === 0 && b.length === 0) return [];

  let mergeArr = a.concat(b);
  for (let i = 0; i < mergeArr.length; i++) {
    if (mergeArr[i] <= 0 || !Number.isInteger(mergeArr[i])) return [];
  }
  return mergeArr.reduce((acc, curr) => {
    if (!acc.includes(curr)) acc = acc.concat(curr);
    return acc;
  }, []);
}
console.log(mergeArray([], [1, 2, 5, 6, 6, 5, 5]));
console.log(mergeArray([1, 2, 3, 4], [1, 2, 5, 6, 6, 5, 5]));
console.log(mergeArray([1, -2, 3, 4], [1, 2, 5, 6, 6, 5, 5]));
console.log(mergeArray([1, -2, 3, 4], [1, 2, 5, 6, 6, 5, 5]));
console.log(mergeArray([1, 2, 3, 4]));

//#29
function mostFrequent(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let frequentCount = [];
  let frequent = 0;
  for (let i = 0; i < numberList.length; i++) {
    frequent = 0;
    for (let j = 0; j < numberList.length; j++) {
      if (numberList[i] === numberList[j]) frequent++;
    }
    frequentCount.push(frequent);
  }

  let maxFrequent = frequentCount[0];
  frequentCount.forEach((fre) => {
    if (fre > maxFrequent) maxFrequent = fre;
  });

  let indexOfMaxFrequent = frequentCount.findIndex(
    (frequent) => frequent === maxFrequent
  );
  return numberList[indexOfMaxFrequent];
}
console.log(mostFrequent([3, 6, 6, 6, 6, 6, 6, 4, 3, 3, 3, 5, 3])); //6
console.log(mostFrequent([1, 2, 3, 4, 5])); //1
console.log(mostFrequent([1, 1, 2, 2, 3, 4, 5, 3, 4, 5])); //1
console.log(mostFrequent([1, 1, 2, 2, 3, 4, 5, 3, 4, 5, 3, 1])); //1
