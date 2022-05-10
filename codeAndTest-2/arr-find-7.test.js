/**ARRAY-FIND-07: Tìm email đầu tiên trong mảng
Viết hàm findFirstEmail(strList) để tìm ra email hợp lệ đầu tiên có trong mảng strList
Ðiều kiện của một email hợp lệ:
Email là một chuỗi có chứa ký tự @ ở giữa và không phải ở cuối từ.
Email có thể có một số domain như: .com, .vn, .com.vn. Domain sẽ xuất hiện ở cuối từ.
Email có định dạng là X@Y. Trong đó X có độ dài ít nhất 3 ký tự, Y có độ dài ít nhất 3 ký tự (ko tính
phần domain nêu trên)
Trường hợp không tìm thấy email thoả yêu cầu thì trả về undefined. */

import { findFirstEmail, findFirstEmailV2 } from "./arr-find-7";
describe("findFirstEmail(strList)", () => {
  test("should return undefined if numberList is not an array", () => {
    expect(findFirstEmail(3)).toBe(undefined);
    expect(findFirstEmail({})).toBe(undefined);
    expect(findFirstEmail(null)).toBe(undefined);
    expect(findFirstEmail(Boolean)).toBe(undefined);
    expect(findFirstEmail("string")).toBe(undefined);
    expect(findFirstEmail(undefined)).toBe(undefined);
  });
  test("should return undefined when numberList is empty", () => {
    expect(findFirstEmail([])).toBe(undefined);
  });
  test("should return undefined if element has no @", () => {
    expect(findFirstEmail(["anh", "example.com"])).toBe(undefined);
    expect(findFirstEmail(["example.vn", "example.com.vn"])).toBe(undefined);
  });
  test("should return undefined if element do not has valid domain", () => {
    expect(findFirstEmail(["anh", "example@gmail."])).toBe(undefined);
    expect(findFirstEmail(["anh", "example@gmail"])).toBe(undefined);
    expect(findFirstEmail([".comexample@gmail", "example@gmail"])).toBe(
      undefined
    );
    expect(findFirstEmail(["anh", "example@gmail.vnn"])).toBe(undefined);
    expect(findFirstEmail(["anh", "example@gmail.coom"])).toBe(undefined);
    expect(findFirstEmail(["anh", "example@gmail...com"])).toBe(undefined);
    expect(findFirstEmail(["anh@gmail..", "example@gmail."])).toBe(undefined);
    expect(
      findFirstEmail(["example@gmail.com.vvn", "example@gmail.coom"])
    ).toBe(undefined);
  });
  test("should return undefined if before and after @ less than 3 characters", () => {
    expect(findFirstEmail(["rec@"])).toBe(undefined);
    expect(findFirstEmail(["java@ja.com"])).toBe(undefined);
    expect(findFirstEmail(["java @ruby.com"])).toBe(undefined);
    expect(findFirstEmail(["java@ ja.com.vn"])).toBe(undefined);
    expect(findFirstEmail(["java @ ja.com.vn", "example@gma il.vn"])).toBe(
      undefined
    );
    expect(findFirstEmail(["java @ ja.com.vn"])).toBe(undefined);
    expect(findFirstEmail(["j@avda@jaja.com.vn", "example@gmail."])).toBe(
      undefined
    );
    expect(findFirstEmail(["javacript@@gmail.com"])).toBe(undefined);
    expect(findFirstEmail(["jjjj@avda@jaja.com.vn"])).toBe(undefined);
    expect(findFirstEmail(["java@ja.com", "le@gmail.vn"])).toBe(undefined);
  });
  test("should return undefined when element has dot greater than 1 ", () => {
    expect(findFirstEmail(["example@.comg.com"])).toBe(undefined);
    expect(findFirstEmail(["exa.mple@.comg.vn"])).toBe(undefined);
    expect(findFirstEmail([".comexample@comg.com"])).toBe(undefined);
  });
  test("should return a first valid email", () => {
    expect(findFirstEmail(["example@.comg.com", "anh@anh.com"])).toBe(
      "anh@anh.com"
    );

    expect(
      findFirstEmail([
        "example@gmail.com",
        "exam@gmail..com",
        "exa@mple@gmail.com",
        "example@gmail.vn",
        "anh@anh.om",
      ])
    ).toBe("example@gmail.com");

    expect(
      findFirstEmail([
        ,
        "test@gmailcom.vn@",
        "le@gmail.com.vn",
        "example@gmail.com.vn",
        "anh@anh.com",
      ])
    ).toBe("example@gmail.com.vn");

    expect(
      findFirstEmail([
        "example@main.con.vn",
        "an@anh.com",
        "example@main.vn",
        "anh@anh.com",
      ])
    ).toBe("example@main.vn");
  });
});

describe("findFirstEmailV2(strList)", () => {
  test("should return undefined if numberList is not an array", () => {
    expect(findFirstEmailV2(3)).toBe(undefined);
    expect(findFirstEmailV2({})).toBe(undefined);
    expect(findFirstEmailV2(null)).toBe(undefined);
    expect(findFirstEmailV2(Boolean)).toBe(undefined);
    expect(findFirstEmailV2("string")).toBe(undefined);
    expect(findFirstEmailV2(undefined)).toBe(undefined);
  });
  test("should return undefined when numberList is empty", () => {
    expect(findFirstEmailV2([])).toBe(undefined);
  });
  test("should return undefined if element has no @", () => {
    expect(findFirstEmailV2(["anh", "example.com"])).toBe(undefined);
    expect(findFirstEmailV2(["example.vn", "example.com.vn"])).toBe(undefined);
  });
  test("should return undefined if element do not has valid domain", () => {
    expect(findFirstEmailV2(["anh", "example@gmail."])).toBe(undefined);
    expect(findFirstEmailV2(["anh", "example@gmail"])).toBe(undefined);
    expect(findFirstEmailV2([".comexample@gmail", "example@gmail"])).toBe(
      undefined
    );
    expect(findFirstEmailV2(["anh", "example@gmail.vnn"])).toBe(undefined);
    expect(findFirstEmailV2(["anh", "example@gmail.coom"])).toBe(undefined);
    expect(findFirstEmailV2(["anh", "example@gmail...com"])).toBe(undefined);
    expect(findFirstEmailV2(["anh@gmail..", "example@gmail."])).toBe(undefined);
    expect(
      findFirstEmailV2(["example@gmail.com.vvn", "example@gmail.coom"])
    ).toBe(undefined);
  });
  test("should return undefined if before and after @ less than 3 characters", () => {
    expect(findFirstEmailV2(["rec@"])).toBe(undefined);
    expect(findFirstEmailV2(["java@ja.com"])).toBe(undefined);
    expect(findFirstEmailV2(["java @ruby.com"])).toBe(undefined);
    expect(findFirstEmailV2(["java@ ja.com.vn"])).toBe(undefined);
    expect(findFirstEmailV2(["java @ ja.com.vn", "example@gma il.vn"])).toBe(
      undefined
    );
    expect(findFirstEmailV2(["java @ ja.com.vn"])).toBe(undefined);
    expect(findFirstEmailV2(["j@avda@jaja.com.vn", "example@gmail."])).toBe(
      undefined
    );
    expect(findFirstEmailV2(["javacript@@gmail.com"])).toBe(undefined);
    expect(findFirstEmailV2(["jjjj@avda@jaja.com.vn"])).toBe(undefined);
    expect(findFirstEmailV2(["java@ja.com", "le@gmail.vn"])).toBe(undefined);
  });
  test("should return undefined when element has dot greater than 1 ", () => {
    expect(findFirstEmailV2(["example@.comg.com"])).toBe(undefined);
    expect(findFirstEmailV2(["exa.mple@.comg.vn"])).toBe(undefined);
    expect(findFirstEmailV2([".comexample@comg.com"])).toBe(undefined);
  });
  test("should return a first valid email", () => {
    expect(findFirstEmailV2(["example@.comg.com", "anh@anh.com"])).toBe(
      "anh@anh.com"
    );

    expect(
      findFirstEmailV2([
        "example@gmail.com",
        "exam@gmail..com",
        "exa@mple@gmail.com",
        "example@gmail.vn",
        "anh@anh.om",
      ])
    ).toBe("example@gmail.com");

    expect(
      findFirstEmailV2([
        ,
        "test@gmailcom.vn@",
        "le@gmail.com.vn",
        "example@gmail.com.vn",
        "anh@anh.com",
      ])
    ).toBe("example@gmail.com.vn");

    expect(
      findFirstEmailV2([
        "example@main.con.vn",
        "an@anh.com",
        "example@main.vn",
        "anh@anh.com",
      ])
    ).toBe("example@main.vn");

    expect(
      findFirstEmailV2([
        "example@main.con.vn",
        "an@anh.com",
        "example@maca.com.vn",
        "anh@anh.co m",
      ])
    ).toBe("example@maca.com.vn");
  });
});
