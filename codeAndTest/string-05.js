/**URL có định dạng: protocol://domain.com/path-name
URL có thể bắt đầu bằng protocol như: http, https, ws hoặc wss
Domain có thể là .com, .com.vn hoặc .vn
Phần tên domain phải có ít nhất 3 ký tự, như abc.com, chứ ab.com là không hợp lệ */

export function countURLs(str) {
  if (typeof str !== "string") return 0;
  if (str.length === 0 || str === "") return 0;

  let strArr = str.split(" ");

  let hasProtocolList = strArr.filter(
    (str) =>
      str.includes("http://") ||
      str.includes("https://") ||
      str.includes("ws://") ||
      str.includes("wss://")
  );

  let hasTLDs = hasProtocolList.filter(
    (url) =>
      url.includes(".com") || url.includes(".com.vn") || url.includes(".vn")
  );

  let validURLs = [];
  hasTLDs.forEach((url) => {
    let splitByFlags = url.split("://");
    if (splitByFlags.length === 2) {
      let splitByDot = splitByFlags[1].split(".");

      console.log("splitByDot: ", splitByDot);

      if (
        splitByDot.length === 2 &&
        splitByDot[0].length >= 3 &&
        (splitByDot[1] === "com" || splitByDot[1] === "vn")
      ) {
        validURLs.push(url);
      }
      if (
        splitByDot.length === 3 &&
        splitByDot[0].length >= 3 &&
        splitByDot[1] === "com" &&
        splitByDot[2] === "vn"
      ) {
        validURLs.push(url);
      }
    }
  });

  return validURLs.length;
}

console.log(
  countURLs(
    "my website is: http://example.com http://example.vn you can http://example.com.vn visit it"
  )
);
