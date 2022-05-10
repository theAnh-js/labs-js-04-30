/**ARRAY-FIND-08: Tìm url cuối cùng trong mảng
Viết hàm findLastUrl(strList) để tìm ra URL cuối cùng có trong mảng strList
Ðiều kiện cho một URL hợp lệ:
URL có định dạng: protocol://domain.com/path-name
URL có thể bắt đầu bằng protocol như: http, https, ws hoặc wss
Domain có thể là .com, .com.vn hoặc .vn
Phần tên domain phải có ít nhất 3 ký tự, như abc.com, chứ ab.com là không hợp lệ */

/**
 * filter elements includes '://'　and .'com or .vn' and 'no spaces'
 * find -> split by :// -> invalid protocol
 *          case1: includes .com but not .vn: length >= 6
 *          case2: includes .vn but not .com: length >= 7
 *          case3: includes both .com and .vn: length >= 10
 */

import { findLastUrl } from "./arr-find-8";
describe("findLastUrl(strList)", () => {
  test("should return undefined if numberList is not an array", () => {
    expect(findLastUrl(3)).toBe(undefined);
    expect(findLastUrl({})).toBe(undefined);
    expect(findLastUrl(null)).toBe(undefined);
    expect(findLastUrl(Boolean)).toBe(undefined);
    expect(findLastUrl("string")).toBe(undefined);
    expect(findLastUrl(undefined)).toBe(undefined);
  });
  test("should return undefined when numberList is empty", () => {
    expect(findLastUrl([])).toBe(undefined);
  });
  test("should return undefined when no url is invalid", () => {
    expect(findLastUrl(["http:/ple.com"])).toBe(undefined);
    expect(findLastUrl(["http://example.co m"])).toBe(undefined);
    expect(findLastUrl(["htp://example.com.vn"])).toBe(undefined);
    expect(findLastUrl(["https://example.om.vn"])).toBe(undefined);
    expect(findLastUrl(["wss://example.com.v n"])).toBe(undefined);
    expect(findLastUrl(["https://example.vn.com"])).toBe(undefined);
  });
  test("should return last invalid url in strList", () => {
    expect(findLastUrl(["wss://example.com"])).toBe("wss://example.com");
    expect(findLastUrl(["wss://example.com", "https://google.com"])).toBe(
      "https://google.com"
    );
    expect(findLastUrl(["ws://facebook.com.vn", "wss://example.com"])).toBe(
      "wss://example.com"
    );
    expect(findLastUrl(["ws://facebook.com.vn", "wss: //example.com"])).toBe(
      "ws://facebook.com.vn"
    );
    expect(
      findLastUrl([
        "wss:example.com",
        "https://gmail.com",
        " https://google.com",
      ])
    ).toBe(" https://google.com");

    expect(findLastUrl(["https://google.com", "wss://chat.sample.com"])).toBe(
      "wss://chat.sample.com"
    );
  });
});
