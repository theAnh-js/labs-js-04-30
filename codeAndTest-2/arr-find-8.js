export function findLastUrl(strList) {
  if (!Array.isArray(strList) || strList.length === 0) return undefined;

  let filterList = strList.filter((str) => {
    let newStr = str.trim();
    return (
      !newStr.includes(" ") &&
      newStr.includes("://") &&
      (newStr.includes(".com") || newStr.includes(".vn"))
    );
  });
  console.log(filterList);

  let filterLength = filterList.filter((str) => {
    return str.split(".").every((s) => s.length >= 3 || s === "vn");
  });

  let findValidE = filterLength.filter((str) => {
    let splitStr = str.split("://");
    let isValid1 = splitStr[0].trim() === "http";
    let isValid2 = splitStr[0].trim() === "https";
    let isValid3 = splitStr[0].trim() === "ws";
    let isValid4 = splitStr[0].trim() === "wss";

    if (isValid1 || isValid2 || isValid3 || isValid4) {
      if (splitStr[1].includes(".com") && !splitStr[1].includes(".vn"))
        return splitStr[1].length >= 6;

      if (splitStr[1].includes(".vn") && !splitStr[1].includes(".com"))
        return splitStr[1].length >= 7;

      if (splitStr[1].includes(".com.vn")) return splitStr[1].length >= 10;
    }
  });

  return findValidE[findValidE.length - 1];
}
