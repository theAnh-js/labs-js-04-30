/**ARRAY-COUNT-01: Ðếm số dương chẵn có trong mảng
Viết hàm countPositiveEvenNumbers(numberList) để đếm có bao nhiêu số dương chẳn có trong mảng.
countPositiveEvenNumbers([-2, -1]); // 0
countPositiveEvenNumbers([-2, -1, 1, 2, 4]); // 2 (2 và 4 thoả điều kiện) */
import { count } from "yargs";
import { countPositiveEvenNumbers } from "./arr-count-1";
describe("countPositiveEvenNumbers(numberList)", () => {
  test("should return empty array if numberList is not an array", () => {
    expect(countPositiveEvenNumbers(3)).toBe(0);
    expect(countPositiveEvenNumbers({})).toBe(0);
    expect(countPositiveEvenNumbers(null)).toBe(0);
    expect(countPositiveEvenNumbers(Boolean)).toBe(0);
    expect(countPositiveEvenNumbers("string")).toBe(0);
    expect(countPositiveEvenNumbers(undefined)).toBe(0);
  });
  test("should return empty array if numberList is empty", () => {
    expect(countPositiveEvenNumbers([])).toBe(0);
  });
  test("should return empty array is there is all negative numbers or odd numbers", () => {
    expect(countPositiveEvenNumbers([-1, -2, -3])).toBe(0);
    expect(countPositiveEvenNumbers([-6, -2, 3, 7, 9, 0])).toBe(0);
    expect(countPositiveEvenNumbers([-1, -2, -3, 29])).toBe(0);
  });
  test("should return amount of positive even numbers", () => {
    expect(countPositiveEvenNumbers([2, 3, 6, 7, 8, 9])).toBe(3);
    expect(countPositiveEvenNumbers([-4, -3, 4, 3, 6, 7, 4, 3])).toBe(3);
    expect(countPositiveEvenNumbers([6, 6, 6, 6, 6, 6, 6, 0, -3, -6, 2])).toBe(
      8
    );
  });
});
