/**ARRAY-CHECK-02: Kiểm tra có số lẻ và chia hết cho 3 không
Viết hàm hasOddNumberDivisibleBy3(numberList) để kiểm tra trong mảng numberList có chứa số lẻ nào
chia hết cho 3 không? */
/**hasOddNumberDivisibleBy3([1, 5, 7]); // false
hasOddNumberDivisibleBy3([1, 6]); // true */

import { hasOddNumberDivisibleBy3, hasOddNumberDivisibleBy3V2 } from "./arr-02";
describe("hasOddNumberDivisibleBy3(numberList)", () => {
  test("should return false if numberList is not an array", () => {
    expect(hasOddNumberDivisibleBy3(3)).toBe(false);
    expect(hasOddNumberDivisibleBy3({})).toBe(false);
    expect(hasOddNumberDivisibleBy3(null)).toBe(false);
    expect(hasOddNumberDivisibleBy3(Boolean)).toBe(false);
    expect(hasOddNumberDivisibleBy3("string")).toBe(false);
    expect(hasOddNumberDivisibleBy3(undefined)).toBe(false);
  });
  test("should return false if numberList is empty", () => {
    expect(hasOddNumberDivisibleBy3([])).toBe(false);
  });
  test("should return false when numberList has no odd number divisible by 3", () => {
    expect(hasOddNumberDivisibleBy3([1, 2, 5, 7])).toBe(false);
    expect(hasOddNumberDivisibleBy3([12, 30, 60, 100])).toBe(false);
    expect(hasOddNumberDivisibleBy3([0, 1, 10, 12, 17])).toBe(false);
  });
  test("should return true when numberList has odd number divisible by 3", () => {
    expect(hasOddNumberDivisibleBy3([1, 2, 3])).toBe(true);
    expect(hasOddNumberDivisibleBy3([3, 3, 3])).toBe(true);
    expect(hasOddNumberDivisibleBy3([1, 2, 7, 8, 9])).toBe(true);
    expect(hasOddNumberDivisibleBy3([21, 22, 24, 36])).toBe(true);
    expect(hasOddNumberDivisibleBy3([, 10, 11, 12, 13, 14, 15])).toBe(true);
  });
});
describe("hasOddNumberDivisibleBy3V2(numberList)", () => {
  test("should return false if numberList is not an array", () => {
    expect(hasOddNumberDivisibleBy3V2(3)).toBe(false);
    expect(hasOddNumberDivisibleBy3V2({})).toBe(false);
    expect(hasOddNumberDivisibleBy3V2(null)).toBe(false);
    expect(hasOddNumberDivisibleBy3V2(Boolean)).toBe(false);
    expect(hasOddNumberDivisibleBy3V2("string")).toBe(false);
    expect(hasOddNumberDivisibleBy3V2(undefined)).toBe(false);
  });
  test("should return false if numberList is empty", () => {
    expect(hasOddNumberDivisibleBy3V2([])).toBe(false);
  });
  test("should return false when numberList has no odd number divisible by 3", () => {
    expect(hasOddNumberDivisibleBy3V2([1, 2, 5, 7])).toBe(false);
    expect(hasOddNumberDivisibleBy3V2([12, 30, 60, 100])).toBe(false);
    expect(hasOddNumberDivisibleBy3V2([0, 1, 10, 12, 17])).toBe(false);
  });
  test("should return true when numberList has odd number divisible by 3", () => {
    expect(hasOddNumberDivisibleBy3V2([1, 2, 3])).toBe(true);
    expect(hasOddNumberDivisibleBy3V2([3, 3, 3])).toBe(true);
    expect(hasOddNumberDivisibleBy3V2([1, 2, 7, 8, 9])).toBe(true);
    expect(hasOddNumberDivisibleBy3V2([21, 22, 24, 36])).toBe(true);
    expect(hasOddNumberDivisibleBy3V2([, 10, 11, 12, 13, 14, 15])).toBe(true);
  });
});
