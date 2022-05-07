/** ARRAY-CHECK-05: Kiểm tra có giá trị falsy nào trong mảng không
Viết hàm hasFalsy(arr) để kiểm tra xem trong mảng arr có giá trị falsy không? */

import { hasFalsy } from "./arr-05";
describe("hasFalsy(arr)", () => {
  test("should return false if hasFalsy is not an array", () => {
    expect(hasFalsy(3)).toBe(false);
    expect(hasFalsy({})).toBe(false);
    expect(hasFalsy(null)).toBe(false);
    expect(hasFalsy(Boolean)).toBe(false);
    expect(hasFalsy("string")).toBe(false);
    expect(hasFalsy(undefined)).toBe(false);
  });
  test("should false if arr is empty", () => {
    expect(hasFalsy([])).toBe(false);
  });

  test("should return false if arr has any falsy values", () => {
    expect(hasFalsy([1, 3, " "])).toBe(false);
    expect(hasFalsy([1, 3, "str"])).toBe(false);
    expect(hasFalsy([1, "0", 3, "false"])).toBe(false);
    expect(hasFalsy([1, "3", "undefined"])).toBe(false);
    expect(hasFalsy([1, "3", "NaN", "undefined"])).toBe(false);
  });
  test("should return true if arr has falsy", () => {
    expect(hasFalsy([0, 3, "tring"])).toBe(true);
    expect(hasFalsy([""])).toBe(true);
    expect(hasFalsy([NaN, Infinity])).toBe(true);
    expect(hasFalsy([null, "NaN"])).toBe(true);
    expect(hasFalsy(["", "undefined"])).toBe(true);
    expect(hasFalsy([undefined, "null", ""])).toBe(true);
    expect(hasFalsy([true, 10, null, NaN])).toBe(true);
  });
});
