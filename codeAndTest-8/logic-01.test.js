/**LOGIC-01: Tìm 2 số có tổng bằng số cho trước
Viết hàm findSumPair(numberList, targetSum) để tìm ra 2 số trong mảng numberList có tổng bằng
targetSum
Lưu ý:
Trường hợp không tìm thấy 2 số thoả yêu cầu thì trả về mảng rỗng
Trường hợp tìm thấy 2 số thoả yêu cầu thì trả về mảng chứa 2 số đó và sắp xếp tăng dần.
findSumPair({}); // []
findSumPair([], 10); // []
findSumPair([1, 2], 2); // [] vì không có 2 số nào có tổng bằng 2
findSumPair([3, 2, 1], 5); // [2, 3] vì 2 + 3 = 5 và sắp xếp tăng dần nên
có mảng [2, 3] */

import { findSumPair } from "./logic-01";
describe("findSumPair(numberList, targetSum)", () => {
  test("should return empty arr if studentList is not an array", () => {
    expect(findSumPair(3)).toEqual([]);
    expect(findSumPair({})).toEqual([]);
    expect(findSumPair(null)).toEqual([]);
    expect(findSumPair(Boolean)).toEqual([]);
    expect(findSumPair("string")).toEqual([]);
    expect(findSumPair(undefined)).toEqual([]);
  });
  test("should return empty array if numberList is empty", () => {
    expect(findSumPair([])).toEqual([]);
  });
  test("should return empty if not found", () => {
    expect(findSumPair([1, 2], 2)).toEqual([]);
    expect(findSumPair([1, 2, 6], 10)).toEqual([]);
    expect(findSumPair([1, 2, 3, 4, 5], 20)).toEqual([]);
  });
  test("should return increasing array that its sum equal to targetSum", () => {
    expect(findSumPair([3, 2, 1], 5)).toEqual([2, 3]);
    expect(findSumPair([1, 2, 3, 4, 5], 6)).toEqual([1, 5]);
    expect(findSumPair([9, 5, 3, 4, 8, 1], 9)).toEqual([4, 5]);
    expect(findSumPair([3, 2, 1, 4, 6, 8, 1], 4)).toEqual([1, 3]);
  });
});
