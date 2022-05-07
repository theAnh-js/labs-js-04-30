/**ARRAY-CHECK-10: Kiểm tra mảng có giảm dần không
Viết hàm isIncreasingNumberList(numberList) để kiểm tra xem mảng số này có phải giảm dần không? */

import { isDecreasingNumberList } from "./arr-10";
describe("isIncreasingNumberList(numberList)", () => {
  test("should return false if numberList is empty or its length less than 2", () => {
    expect(isDecreasingNumberList([])).toBe(false);
    expect(isDecreasingNumberList([1])).toBe(false);
  });
  test("should return false if numberList is not an array", () => {
    expect(isDecreasingNumberList(NaN)).toBe(false);
    expect(isDecreasingNumberList(null)).toBe(false);
    expect(isDecreasingNumberList(1234)).toBe(false);
    expect(isDecreasingNumberList("easy")).toBe(false);
    expect(isDecreasingNumberList(undefined)).toBe(false);
    expect(isDecreasingNumberList({ number: 222 })).toBe(false);
  });
  test("should return false if after element greater than before element in numberList", () => {
    expect(isDecreasingNumberList([1, 0, 4])).toBe(false);
    expect(isDecreasingNumberList([2, 2, 2, 2, 2, 2])).toBe(false);
    expect(isDecreasingNumberList([1, 2, 4, 5, 2, 1])).toBe(false);
    expect(isDecreasingNumberList([1, 2, 4, 5, 5, 5, 9])).toBe(false);
    expect(isDecreasingNumberList([23, 43, 3, 4, 333])).toBe(false);
    expect(isDecreasingNumberList([22, 33, 55, 66, 11])).toBe(false);
  });
  test("should return true when numberList is a increasing number list", () => {
    expect(isDecreasingNumberList([5, 4, 3, 2, 1, 0])).toBe(true);
    expect(isDecreasingNumberList([1999, 199, 19])).toBe(true);
    expect(isDecreasingNumberList([50, 40, 30, 20, 10])).toBe(true);
  });
});
