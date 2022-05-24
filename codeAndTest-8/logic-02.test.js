/**LOGIC-02: Tìm số bị thiếu cho trong một mảng từ [5..n]
Viết hàm findMissingNumber(numberList, n) để tìm ra con số bị thiếu trong dãy số [5..n]
Mảng numberList sẽ đảm bảo chỉ chứa các con số trong phạm vi từ 5 đến n.
Mỗi số chỉ xuất hiện một lần trong mảng.
Chắc chắn sẽ luôn có một con số bị thiếu trong mảng (ko hơn, ko kém)
findMissingNumber([5, 6, 8, 9, 10], 10); // 7 vì trong mảng thiếu mất số 7
findMissingNumber([5], 6); // 6 vì trong mảng thiếu mất số 6 */

import { findMissingNumber } from "./logic-02";

describe("findMissingNumber(numberList, n)", () => {
  test("should return empty arr if studentList is not an array", () => {
    expect(findMissingNumber(3)).toEqual([]);
    expect(findMissingNumber({})).toEqual([]);
    expect(findMissingNumber(null)).toEqual([]);
    expect(findMissingNumber(Boolean)).toEqual([]);
    expect(findMissingNumber("string")).toEqual([]);
    expect(findMissingNumber(undefined)).toEqual([]);
  });

  test("should return sufficient array", () => {
    expect(findMissingNumber([5], 6)).toBe(6);
    expect(findMissingNumber([5, 6, 7, 8, 10], 10)).toBe(9);
    expect(findMissingNumber([5, 6, 8, 9, 10], 10)).toBe(7);
    expect(findMissingNumber([5, 6, 7, 8, 9, 10, 11], 12)).toBe(12);
    expect(findMissingNumber([5, 6, 7, 8, 9, 10, 11, 12, 14, 15], 15)).toBe(13);
  });
});
