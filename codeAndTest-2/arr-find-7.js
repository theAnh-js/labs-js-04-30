//v1
export function findFirstEmail(strList) {
  if (!Array.isArray(strList) || strList.length === 0) return undefined;

  // get elements has @ and domain.
  let filterEmail = strList.filter(
    (str) =>
      str.includes("@") &&
      (str.includes(".com") || str.includes(".vn") || str.includes(".com.vn"))
  );

  let findValidE = filterEmail.find((str) => {
    let splitStrByDot = str.split(".");
    let splitStrByAtSign = str.split("@");

    // when domain is .com
    if (
      splitStrByDot.length === 2 &&
      splitStrByDot[splitStrByDot.length - 1] === "com"
    ) {
      return (
        splitStrByAtSign[0].length >= 3 &&
        !splitStrByAtSign[0].includes(" ") &&
        splitStrByAtSign[1].length >= 7 &&
        !splitStrByAtSign[1].includes(" ")
      );
    }

    // when domain is .vn
    if (
      splitStrByDot.length === 2 &&
      splitStrByDot[splitStrByDot.length - 1] === "vn"
    ) {
      return (
        splitStrByAtSign[0].length >= 3 &&
        !splitStrByAtSign[0].includes(" ") &&
        splitStrByAtSign[1].length >= 6 &&
        !splitStrByAtSign[1].includes(" ")
      );
    }

    // when domain is .com.vn
    if (
      splitStrByDot.length === 3 &&
      splitStrByDot[1] === "com" &&
      splitStrByDot[2] === "vn"
    ) {
      return (
        splitStrByAtSign[0].length >= 3 &&
        !splitStrByAtSign[0].includes(" ") &&
        splitStrByAtSign[1].length >= 10 &&
        !splitStrByAtSign[1].includes(" ")
      );
    }
  });
  return findValidE;
}

//V2
export function findFirstEmailV2(strList) {
  if (!Array.isArray(strList) || strList.length === 0) return undefined;

  // get elements has '@' and 'domain' and 'no space'
  let filterEmail = strList.filter(
    (str) =>
      str.includes("@") &&
      !str.trim().includes(" ") &&
      (str.includes(".com") || str.includes(".vn"))
  );

  // find invalid mail
  let findValidE = filterEmail.find((str) => {
    let splitStrByDot = str.split(".");
    let splitStrByAtSign = str.split("@");

    // when domain is .com
    if (
      splitStrByDot.length === 2 &&
      splitStrByDot[splitStrByDot.length - 1] === "com"
    )
      return splitStrByAtSign[0].length >= 3 && splitStrByAtSign[1].length >= 7;

    // when domain is .vn
    if (
      splitStrByDot.length === 2 &&
      splitStrByDot[splitStrByDot.length - 1] === "vn"
    )
      return splitStrByAtSign[0].length >= 3 && splitStrByAtSign[1].length >= 6;

    // when domain is .com.vn
    if (
      splitStrByDot.length === 3 &&
      splitStrByDot[1] === "com" &&
      splitStrByDot[2] === "vn"
    )
      return (
        splitStrByAtSign[0].length >= 3 && splitStrByAtSign[1].length >= 10
      );
  });

  return findValidE;
}
