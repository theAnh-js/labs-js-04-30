/**ARRAY-FIND-04: Tìm số âm lẻ cuối cùng trong mảng
Viết hàm findLastNegativeOdd(numberList) để tìm ra số âm lẻ cuối cùng trong mảng numberList */

/**findLastNegativeOdd([-1, -3, -5]); // -5 vì 5 là số âm lẻ cuối cùng
findLastNegativeOdd([1, 3, 5]); // undefined vì không có số âm lẻ nào
trong mảng*/
import { findLastNegativeOdd, findLastNegativeOddV2 } from "./arr-find-4";

describe("findLastNegativeOdd(numberList)", () => {
  test("should return undefined if numberList is not an array", () => {
    expect(findLastNegativeOdd(3)).toBe(undefined);
    expect(findLastNegativeOdd({})).toBe(undefined);
    expect(findLastNegativeOdd(null)).toBe(undefined);
    expect(findLastNegativeOdd(Boolean)).toBe(undefined);
    expect(findLastNegativeOdd("string")).toBe(undefined);
    expect(findLastNegativeOdd(undefined)).toBe(undefined);
  });
  test("should return undefined when numberList is empty", () => {
    expect(findLastNegativeOdd([])).toBe(undefined);
  });
  test("should return undefined if numberList has no negative numbers", () => {
    expect(findLastNegativeOdd([1, 2, 3])).toBe(undefined);
    expect(findLastNegativeOdd([1, 3, 5])).toBe(undefined);
    expect(findLastNegativeOdd([1, -2, 3])).toBe(undefined);
    expect(findLastNegativeOdd([0, 1, 2, 3])).toBe(undefined);
  });
  test(" should return last negative odd numbers", () => {
    expect(findLastNegativeOdd([-1, -3, -5])).toBe(-5);
    expect(findLastNegativeOdd([-22, -36, -5, -1])).toBe(-1);
    expect(findLastNegativeOdd([-2, 1, 3, -5, -11])).toBe(-11);
    expect(findLastNegativeOdd([1, -3, 5, -5, -33])).toBe(-33);
  });
});

describe("findLastNegativeOddV2(numberList)", () => {
  test("should return undefined if numberList is not an array", () => {
    expect(findLastNegativeOddV2(3)).toBe(undefined);
    expect(findLastNegativeOddV2({})).toBe(undefined);
    expect(findLastNegativeOddV2(null)).toBe(undefined);
    expect(findLastNegativeOddV2(Boolean)).toBe(undefined);
    expect(findLastNegativeOddV2("string")).toBe(undefined);
    expect(findLastNegativeOddV2(undefined)).toBe(undefined);
  });
  test("should return undefined when numberList is empty", () => {
    expect(findLastNegativeOddV2([])).toBe(undefined);
  });
  test("should return undefined if numberList has no negative numbers", () => {
    expect(findLastNegativeOddV2([1, 2, 3])).toBe(undefined);
    expect(findLastNegativeOddV2([1, 3, 5])).toBe(undefined);
    expect(findLastNegativeOddV2([1, -2, 3])).toBe(undefined);
    expect(findLastNegativeOddV2([0, 1, 2, 3])).toBe(undefined);
  });
  test(" should return last negative odd numbers", () => {
    expect(findLastNegativeOddV2([-1, 3, 5 - 3, -5])).toBe(-5);
    expect(findLastNegativeOddV2([-22, 36, -36, -5, -1, 3])).toBe(-1);
    expect(findLastNegativeOddV2([-2, 1, 3, -5, -11])).toBe(-11);
    expect(findLastNegativeOddV2([1, -3, 5, -5, -33, -22])).toBe(-33);
  });
});
