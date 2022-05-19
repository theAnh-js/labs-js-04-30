/**ARRAY-SUBARR-03: Kiểm tra mảng a có phải là mảng con của mảng b
Viết hàm isSubArray(a, b) để kiểm tra xem a có phải là mảng con của b không?
Nếu a là mảng rỗng thì luôn trả về true.
Nếu a có độ dài lớn hơn b thì luôn trả về false.
Trả về true nếu toàn bộ mảng a nằm trong mảng b theo đúng thứ tự của từng phần tử trong mảng a.
isSubArray([], [1]); // true
isSubArray([1], [1, 2]); // true
isSubArray([1, 2], [2, 3, 4]); // false
isSubArray([1, 2], [4, 10, 1, 2, 3]); // true */

import { isSubArray } from "./arr-subbar-3";
describe("isSubArray(a, b)", () => {
  test("should return false if a is not an array", () => {
    expect(isSubArray(3, [])).toBe(false);
    expect(isSubArray({}, [])).toBe(false);
    expect(isSubArray(null, [])).toBe(false);
    expect(isSubArray(Boolean, [])).toBe(false);
    expect(isSubArray("string", [])).toBe(false);
    expect(isSubArray(undefined, [])).toBe(false);
  });
  test("should return false if b is not an array", () => {
    expect(isSubArray([], 3)).toBe(false);
    expect(isSubArray([], {})).toBe(false);
    expect(isSubArray([], null)).toBe(false);
    expect(isSubArray([], Boolean)).toBe(false);
    expect(isSubArray([], "string")).toBe(false);
    expect(isSubArray([], undefined)).toBe(false);
  });
  test("should return false if length of a greater than length of b", () => {
    expect(isSubArray([1, 2, 3, 4], [1])).toBe(false);
    expect(isSubArray([1, 2, 3, 4], [1, 2])).toBe(false);
    expect(isSubArray([1, 2, 3, 4], [1, 2, 3])).toBe(false);
  });
  test("should return true if a if an empty array", () => {
    expect(isSubArray([], [1])).toBe(true);
    expect(isSubArray([], [1, 2, 3])).toBe(true);
    expect(isSubArray([], [1, 3, 5, 5, 7])).toBe(true);
  });
  test("should return fasle if a is not an subarray of b", () => {
    expect(isSubArray([1, 5], [1, 2, 3])).toBe(false);
    expect(isSubArray([1, 5, 4], [1, 2, 3])).toBe(false);
    expect(isSubArray([1, 2, 5], [1, 2, 3])).toBe(false);
    expect(isSubArray([6, 5, 8], [1, 2, 3])).toBe(false);
    expect(isSubArray([3, 2, 1], [1, 2, 3])).toBe(false);
  });
  test("should return true if a is an subarray of b", () => {
    expect(isSubArray([], [])).toBe(true);
    expect(isSubArray([1, 2, 3], [1, 2, 3, 4, 4, 5])).toBe(true);
    expect(isSubArray([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(isSubArray([5, 9], [2, 3, 4, 5, 9, 7, 6])).toBe(true);
    expect(
      isSubArray([5, 9, 29, 48, 58], [2, 3, 4, 5, 9, 29, 48, 58, 5, 9, 7, 6])
    ).toBe(true);
  });
});
