/**ARRAY-SUBARR-04: Tìm các mảng con có chứa số dương chẳn liên tiếp
Viết hàm findAllPositiveEvenSubArr(numberList) để tìm ra tất cả các mảng con chỉ chứa các số dương
chẳn.
findAllPositiveEvenSubArr([1, 2, 4, 3, 5, 10, 20]);
// should return
// [
// [2, 4],
// [10, 20]
// ] */
import { findAllPositiveEvenSubArr } from "./arr-subbar-4";
describe("findAllPositiveEvenSubArr(numberList)", () => {
  test("should return [] if studentList is not an array", () => {
    expect(findAllPositiveEvenSubArr(3)).toEqual([]);
    expect(findAllPositiveEvenSubArr({})).toEqual([]);
    expect(findAllPositiveEvenSubArr(null)).toEqual([]);
    expect(findAllPositiveEvenSubArr(Boolean)).toEqual([]);
    expect(findAllPositiveEvenSubArr("string")).toEqual([]);
    expect(findAllPositiveEvenSubArr(undefined)).toEqual([]);
  });
  test("should return empty array when numberList is empty", () => {
    expect(findAllPositiveEvenSubArr([])).toEqual([]);
  });
  test("should return all positive even subarray", () => {
    expect(findAllPositiveEvenSubArr([1, 2, 4, 3, 5, 10, 20])).toEqual([
      [2, 4],
      [10, 20],
    ]);

    expect(findAllPositiveEvenSubArr([1, 2, 4, 10, 20, 1, 4, 3])).toEqual([
      [2, 4, 10, 20],
    ]);

    expect(findAllPositiveEvenSubArr([1, 2, 3, 4, 5, 6, 7, 8, 6])).toEqual([
      [8, 6],
    ]);
    expect(findAllPositiveEvenSubArr([1, 2, 4, 3, 10, 20, 1, 4, 6, 3])).toEqual(
      [
        [2, 4],
        [10, 20],
        [4, 6],
      ]
    );
  });
});
