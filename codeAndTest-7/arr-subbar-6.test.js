/**ARRAY-SUBARR-06: Tìm mảng con tăng dần có tổng lớn nhất, trả về mảng con đầu tiên
Viết hàm findMaxSumArray(numberList) để tìm ra mảng con tăng dần có tổng lớn nhất và trả về mảng
con đó.
findMaxSumArray([]); // []
findMaxSumArray([1, 2, 3, 0, 2, 4]);
// [1, 2, 3] vì
// có 2 mảng con hợp lệ: [1, 2, 3] và [0, 2, 4] 
// cả 2 đều có tổng bằng 6, nên return mảng đầu tiên
findMaxSumArray([1, 2, 3]); // [1, 2, 3] */
import { findMaxSumArray } from "./arr-subbar-6";
describe("findMaxSumArray(numberList)", () => {
  test("should return empty array if numberList is not an array", () => {
    expect(findMaxSumArray(3)).toEqual([]);
    expect(findMaxSumArray({})).toEqual([]);
    expect(findMaxSumArray(null)).toEqual([]);
    expect(findMaxSumArray(Boolean)).toEqual([]);
    expect(findMaxSumArray("string")).toEqual([]);
    expect(findMaxSumArray(undefined)).toEqual([]);
  });
  test("should return empty array if numberList is empty", () => {
    expect(findMaxSumArray([])).toEqual([]);
  });
  test("should return first max sum of subbar array", () => {
    expect(findMaxSumArray([1, 2, 3, 0, 2, 4])).toEqual([1, 2, 3]);
    expect(findMaxSumArray([0, 2, 4, 1, 2, 3])).toEqual([0, 2, 4]);
    expect(findMaxSumArray([0, 2, 4, 1, 2, 3, 1, 2, 3, 4, 5])).toEqual([
      1, 2, 3, 4, 5,
    ]);
  });
});
