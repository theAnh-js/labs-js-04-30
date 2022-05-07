/**ARRAY-CHECK-04: Kiểm tra có giá trị truthy nào trong mảng không
Viết hàm hasTruthy(arr) để kiểm tra xem trong mảng arr có giá trị truthy không?
*/
/**ARRAY-CHECK-04: Kiểm tra có giá trị truthy nào trong mảng không
Viết hàm hasTruthy(arr) để kiểm tra xem trong mảng arr có giá trị truthy không?
*/

import { hasTruthy } from "./arr-04";
describe("hasTruthy(arr)", () => {
  test("should return false if the word list is not an array", () => {
    expect(hasTruthy(3)).toBe(false);
    expect(hasTruthy({})).toBe(false);
    expect(hasTruthy(null)).toBe(false);
    expect(hasTruthy(Boolean)).toBe(false);
    expect(hasTruthy("string")).toBe(false);
    expect(hasTruthy(undefined)).toBe(false);
  });
  test("should return false if arr has no truthy", () => {
    expect(hasTruthy([0])).toBe(false);
    expect(hasTruthy([])).toBe(false);
    expect(hasTruthy([NaN])).toBe(false);
    expect(hasTruthy([null, NaN])).toBe(false);
    expect(hasTruthy(["", undefined])).toBe(false);
    expect(hasTruthy([undefined, null, ""])).toBe(false);
    expect(hasTruthy([false, 0, null, NaN])).toBe(false);
  });

  test("should return true if arr has at least one Truthy", () => {
    expect(hasTruthy(["", undefined, 10])).toBe(true);
    expect(hasTruthy([null, NaN, "false"])).toBe(true);
    expect(hasTruthy([NaN, "undefined", 3])).toBe(true);
    expect(hasTruthy([NaN, "undefined", true])).toBe(true);
    expect(hasTruthy([false, 0, null, NaN, " "])).toBe(true);
    expect(hasTruthy([0, "I am a truthy value"])).toBe(true);
    expect(hasTruthy([undefined, null, "", "null"])).toBe(true);
  });
});
