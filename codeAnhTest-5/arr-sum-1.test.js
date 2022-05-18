/**8. Xử lý mảng (array): tính tổng
ARRAY-SUM-01: Tổng các số chẳn mà nó lớn hơn số trước đó.
Viết hàm sumEvenNumbers(numberList) để tính tổng các số chẵn có giá trị lớn hơn số liền kế trước đó.
sumEvenNumbers([-10, -4, 2, 8, 5]); // 6 vì lấy -4 + 2 + 8 = 6 */
import { sumEvenNumbers } from "./arr-sum-1";
describe("sumEvenNumbers(numberList)", () => {
  test("should return 0 if numberList is not an array", () => {
    expect(sumEvenNumbers(3)).toBe(0);
    expect(sumEvenNumbers({})).toBe(0);
    expect(sumEvenNumbers(null)).toBe(0);
    expect(sumEvenNumbers(Boolean)).toBe(0);
    expect(sumEvenNumbers("string")).toBe(0);
    expect(sumEvenNumbers(undefined)).toBe(0);
  });
  test("should return 0 if numberList is empty", () => {
    expect(sumEvenNumbers([])).toBe(0);
  });
  test("should return 0 if has no valid event", () => {
    expect(sumEvenNumbers([3, 5, 7, 9])).toBe(0);
    expect(sumEvenNumbers([2, 2, 2, 7, 9])).toBe(0);
    expect(sumEvenNumbers([2, 2, 7, 9, 2])).toBe(0);
    expect(sumEvenNumbers([-2, 3, 5, 7, 9])).toBe(0);
  });
  test("should return sum of valid even numbers", () => {
    expect(sumEvenNumbers([2, 3, 5, 6, 7])).toBe(6);
    expect(sumEvenNumbers([-10, -4, 2, 8, 5])).toBe(-4 + 2 + 8);
    expect(sumEvenNumbers([-11, -4, 10, 2, 8, 5, 6])).toBe(-4 + 10 + 8 + 6);
    expect(sumEvenNumbers([-10, -10, -4, 2, 8, 5])).toBe(-4 + 2 + 8);
    expect(sumEvenNumbers([-22, -22, -20, -18, -10])).toBe(-20 - 18 - 10);
    expect(sumEvenNumbers([-22, 23, 34, -20, -18, -10])).toBe(34 - 18 - 10);
    expect(sumEvenNumbers([-22, -20, -18, -10, 40])).toBe(-20 - 18 - 10 + 40);
    expect(sumEvenNumbers([3, 2, 8, 5, 14, 16, 7, 98])).toBe(8 + 14 + 16 + 98);
    expect(sumEvenNumbers([7, 5, 2, 8, 3, 5, 14, 16, 7, 98])).toBe(
      8 + 14 + 16 + 98
    );
  });
});
