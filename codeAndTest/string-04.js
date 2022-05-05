export function countEmails(str) {
  if (typeof str !== "string") return 0;
  if (str.length === 0 || str === " ") return 0;

  let strArr = str.split(" ");

  // get str includes @ and ivalid domain
  let firstMailList = [];
  for (let i = 0; i < strArr.length; i++) {
    if (
      strArr[i].includes("@") &&
      (strArr[i].includes(".com") ||
        strArr[i].includes(".vn") ||
        strArr[i].includes(".com.vn"))
    ) {
      firstMailList.push(strArr[i]);
    }
  }

  //get str has at least 3 characters before @ and after @.
  let secondMailList = [];
  for (let i = 0; i < firstMailList.length; i++) {
    let splitEmail = firstMailList[i].split("@");
    if (splitEmail[0] !== " " && splitEmail[1] !== " ") {
      if (splitEmail[0].length >= 3 && splitEmail[1].length >= 6)
        secondMailList.push(firstMailList[i]);
    }
  }

  // get email has only one or two dot and 'vn' or 'com' or 'vn.com' are in last email.
  let lastMailList = [];
  for (let i = 0; i < secondMailList.length; i++) {
    let splitEmail = secondMailList[i].split(".");
    if (
      splitEmail.length === 2 &&
      (splitEmail[1] === "vn" || splitEmail[1] === "com")
    ) {
      lastMailList.push(secondMailList[i]);
    }

    if (
      splitEmail.length === 3 &&
      splitEmail[1] === "com" &&
      splitEmail[2] === "vn"
    )
      lastMailList.push(secondMailList[i]);
  }

  return lastMailList.length;
}
