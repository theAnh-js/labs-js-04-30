/**ARRAY-SUM-02: Tổng của các chữ số trong mảng
Viết hàm sumAllDigits(numberList) để tính tổng các chữ số của từng số trong mảng numberList
sumAllDigits([]); // 0
sumAllDigits([4]); // 4
sumAllDigits([123, 4]); // 10 vì lấy 1 + 2 + 3 + 4 = 10
sumAllDigits([1234, 55]); // 20 vì lấy 1 + 2 + 3 + 4 + 5 + 5 = 20 */
import { sumAllDigits } from "./arr-sum-2";
describe("sumAllDigits(numberList)", () => {
  test("should return 0 if numberList is not an array", () => {
    expect(sumAllDigits(3)).toBe(0);
    expect(sumAllDigits({})).toBe(0);
    expect(sumAllDigits(null)).toBe(0);
    expect(sumAllDigits(Boolean)).toBe(0);
    expect(sumAllDigits("string")).toBe(0);
    expect(sumAllDigits(undefined)).toBe(0);
  });
  test("should return 0 if numberList is empty", () => {
    expect(sumAllDigits([])).toBe(0);
  });
  test("should return sum of all digits", () => {
    expect(sumAllDigits([0])).toBe(0);
    expect(sumAllDigits([40])).toBe(4);
    expect(sumAllDigits([123, 4])).toBe(10);
    expect(sumAllDigits([1234, 55])).toBe(20);
    expect(sumAllDigits([1234, 55, 1, 1, 2, 3])).toBe(27);
  });
});
