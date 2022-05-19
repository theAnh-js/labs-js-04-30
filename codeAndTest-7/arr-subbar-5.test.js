/**ARRAY-SUBARR-05: Tìm mảng con tăng dần có tổng lớn nhất, trả về con số tổng
Viết hàm findMaxSumArray(numberList) để tìm ra mảng con tăng dần có tổng lớn nhất và trả về tổng
của mảng con đó.
findMaxSumArray([]); // 0
findMaxSumArray([1, 2, 3]); // 6
findMaxSumArray([1, 2, 3, 0, 10, 20]); 
// should return 30 vì lấy tổng của mảng con [0, 10, 20 */
import { findMaxSumArray } from "./arr-subbar-5";
describe("findMaxSumArray(numberList)", () => {
  test("should return 0 if studentList is not an array", () => {
    expect(findMaxSumArray(3)).toBe(0);
    expect(findMaxSumArray({})).toBe(0);
    expect(findMaxSumArray(null)).toBe(0);
    expect(findMaxSumArray(Boolean)).toBe(0);
    expect(findMaxSumArray("string")).toBe(0);
    expect(findMaxSumArray(undefined)).toBe(0);
  });
  test("should return max sum of increasing subbar array", () => {
    expect(findMaxSumArray([])).toBe(0);
    expect(findMaxSumArray([1, 2, 3])).toBe(6);
    expect(findMaxSumArray([1, 2, 3, 0, 10, 20])).toBe(30);
    expect(findMaxSumArray([1, 2, 3, 2, 10, 20])).toBe(32);
    expect(findMaxSumArray([1, 2, 3, 0, 10, 20, 5, 4, 6, 10, 100])).toBe(120);
  });
});
