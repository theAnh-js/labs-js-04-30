/**ARRAY-FIND-06: Tìm số chính phương cuối cùng trong mảng
Viết hàm findLastPerfectSquare(numberList) để tìm ra số chính phương cuối cùng trong mảng
numberList
*/

import { findLastPerfectSquare } from "./arr-find-6";
describe("findLastPerfectSquare(numberList)", () => {
  test("should return undefined if numberList is not an array", () => {
    expect(findLastPerfectSquare(3)).toBe(undefined);
    expect(findLastPerfectSquare({})).toBe(undefined);
    expect(findLastPerfectSquare(null)).toBe(undefined);
    expect(findLastPerfectSquare(Boolean)).toBe(undefined);
    expect(findLastPerfectSquare("string")).toBe(undefined);
    expect(findLastPerfectSquare(undefined)).toBe(undefined);
  });
  test("should return undefined when numberList is empty", () => {
    expect(findLastPerfectSquare([])).toBe(undefined);
  });
  test("should return undefined if numberList has no perfect square", () => {
    expect(findLastPerfectSquare([2])).toBe(undefined);
    expect(findLastPerfectSquare([2, 7, 8, 10])).toBe(undefined);
    expect(findLastPerfectSquare([5, 2, 3, 5])).toBe(undefined);
    expect(findLastPerfectSquare([24, 23, 56, 57])).toBe(undefined);
  });

  test("should return last perfect square", () => {
    expect(findLastPerfectSquare([25, 16, 9, 49])).toBe(49);
    expect(findLastPerfectSquare([1, 2, 3, 4, 5, 6, 9])).toBe(9);
    expect(findLastPerfectSquare([3, 4, 5, 9, 16, 2, 3])).toBe(16);
    expect(
      findLastPerfectSquare([4, 9, 16, 23, 24, 25, 25, 26, 27, 27, 29])
    ).toBe(25);
  });
});
