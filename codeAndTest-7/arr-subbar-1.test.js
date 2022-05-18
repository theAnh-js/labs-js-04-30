/**ARRAY-SUBARR-01: Tìm các mảng con tăng dần
Viết hàm findAllIncreasingSubArr(numberList) để tìm ra tất cả các mảng con tăng dần có trong mảng
numberList.
Mảng có tính chất tăng dần phải có ít nhất 2 phần tử và phần tử tại vị trí bất kỳ luôn lớn phần từ liền
trước nó (trừ phần tử đầu tiên)
findAllIncreasingSubArr([1, 2, 3, -5, -10, 5, 10]);
// should return
// [
// [1, 2, 3],
// [-10, 5, 10]
// ] */
import { findAllIncreasingSubArr } from "./arr-subbar-1";
describe("findAllIncreasingSubArr(numberList)", () => {
  test("should return [] if studentList is not an array", () => {
    expect(findAllIncreasingSubArr(3)).toEqual([]);
    expect(findAllIncreasingSubArr({})).toEqual([]);
    expect(findAllIncreasingSubArr(null)).toEqual([]);
    expect(findAllIncreasingSubArr(Boolean)).toEqual([]);
    expect(findAllIncreasingSubArr("string")).toEqual([]);
    expect(findAllIncreasingSubArr(undefined)).toEqual([]);
  });
  test("should return empty array when numberList is empty", () => {
    expect(findAllIncreasingSubArr([])).toEqual([]);
  });
  test("should return subbar array of grounp increasing numbers", () => {
    expect(findAllIncreasingSubArr([1, 2, 3, -5, -10, 5, 10])).toEqual([
      [1, 2, 3],
      [-10, 5, 10],
    ]);

    expect(findAllIncreasingSubArr([1, 2, 3, -5, -10, 5, 10, 2, 11])).toEqual([
      [1, 2, 3],
      [-10, 5, 10],
    ]);

    expect(
      findAllIncreasingSubArr([1, 2, 3, -5, -10, 5, 10, 2, 3, 4, 5, 8, 9])
    ).toEqual([
      [1, 2, 3],
      [-10, 5, 10],
      [3, 4, 5, 8, 9],
    ]);
  });
});
