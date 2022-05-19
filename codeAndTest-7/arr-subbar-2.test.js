/**ARRAY-SUBARR-02: Tìm các mảng con giảm dần có ít nhất 3 phần tử
Viết hàm findAllDecreasingSubArr(numberList) để tìm ra tất cả các mảng con giảm dần có độ dài ít nhất
3 phần tử.
findAllDecreasingSubArr([3, 2, 1, 15, 10, 20]);
// should return
// [
// [3, 2, 1],
// ]
// 
// còn mảng [15, 10] là mảng giảm dần nhưng độ dài chưa đủ 3*/

import { findAllDecreasingSubArr } from "./arr-subbar-2";
describe("findAllDecreasingSubArr(numberList)", () => {
  test("should return [] if studentList is not an array", () => {
    expect(findAllDecreasingSubArr(3)).toEqual([]);
    expect(findAllDecreasingSubArr({})).toEqual([]);
    expect(findAllDecreasingSubArr(null)).toEqual([]);
    expect(findAllDecreasingSubArr(Boolean)).toEqual([]);
    expect(findAllDecreasingSubArr("string")).toEqual([]);
    expect(findAllDecreasingSubArr(undefined)).toEqual([]);
  });
  test("should return empty array when numberList is empty", () => {
    expect(findAllDecreasingSubArr([])).toEqual([]);
  });
  test("should return subbar array of decreasing numbers", () => {
    expect(findAllDecreasingSubArr([3, 2, 1, 15, 10, 20])).toEqual([[3, 2, 1]]);
    expect(findAllDecreasingSubArr([3, 2, 1, 15, 10, 5, 20])).toEqual([
      [3, 2, 1],
      [15, 10, 5],
    ]);
    expect(findAllDecreasingSubArr([3, 2, 1, 15, 10, 20, 15, 10, 5])).toEqual([
      [3, 2, 1],
      [20, 15, 10, 5],
    ]);
  });
});
