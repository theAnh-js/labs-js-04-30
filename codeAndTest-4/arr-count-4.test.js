/**ARRAY-COUNT-04: Ðếm số lượng các số khác nhau có trong mảng
Viết hàm countUniqueNumbers(numberList) để tìm ra có bao nhiêu số khác nhau trong mảng.
countUniqueNumbers([]); // 0
countUniqueNumbers([1, 1, 1]); // 1
countUniqueNumbers([1, 2, 3]); // 3
countUniqueNumbers([1, 2, 2, 3, 1]); // 3 */
import { countUniqueNumbers } from "./arr-count-4";
describe("countUniqueNumbers(numberList)", () => {
  test("should return 0 if numberList is not an array", () => {
    expect(countUniqueNumbers(3)).toBe(0);
    expect(countUniqueNumbers({})).toBe(0);
    expect(countUniqueNumbers(null)).toBe(0);
    expect(countUniqueNumbers(Boolean)).toBe(0);
    expect(countUniqueNumbers("string")).toBe(0);
    expect(countUniqueNumbers(undefined)).toBe(0);
  });
  test("should return 0 if numberList is empty", () => {
    expect(countUniqueNumbers([])).toBe(0);
  });
  test("should return amount of different numbers", () => {
    expect(countUniqueNumbers([1, 2, 3, 4, 5, 1, 5, 5])).toBe(5);
    expect(countUniqueNumbers([5, 5, 5, 5, 5, 5])).toBe(1);
    expect(countUniqueNumbers([51, 55, 52, 53, 53, 51])).toBe(4);
    expect(countUniqueNumbers([1, 1, 3, 4, 5, 2, 3, 4, 5])).toBe(5);
  });
});
