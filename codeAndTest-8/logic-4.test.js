/**LOGIC-04: Tìm số có số lần xuất hiện nhiều nhất
Viết hàm findMostFrequentNumber(numberList) tìm số có số lần xuất hiện nhiều nhất trong mảng
numberList, trường hợp có nhiều số cùng tần số xuất hiện thì trả về số đầu tiên.
findMostFrequentNumber([1]); // 1
findMostFrequentNumber([1, 2, 3, 2]); // 2
findMostFrequentNumber([1, 2, 3, 2, 3, 4]); // 2 */
import { findMostFrequentNumber, findMostFrequentNumberV2 } from "./logic-4";
describe("findMostFrequentNumber(numberList)", () => {
  test("should return 0  if numberList is not an array", () => {
    expect(findMostFrequentNumber(3)).toBe(0);
    expect(findMostFrequentNumber({})).toBe(0);
    expect(findMostFrequentNumber(null)).toBe(0);
    expect(findMostFrequentNumber(Boolean)).toBe(0);
    expect(findMostFrequentNumber("string")).toBe(0);
    expect(findMostFrequentNumber(undefined)).toBe(0);
  });
  test("should return 0 if numberList is empty", () => {
    expect(findMostFrequentNumber([])).toBe(0);
  });
  test("should return most frequent number", () => {
    expect(findMostFrequentNumber([1])).toBe(1);
    expect(findMostFrequentNumber([1, 2])).toBe(1);
    expect(findMostFrequentNumber([1, 2, 3, 2])).toBe(2);
    expect(findMostFrequentNumber([1, 2, 3, 2, 3, 4])).toBe(2);
    expect(findMostFrequentNumber([1, 2, 3, 2, 3, 3, 4])).toBe(3);
  });
});

describe("findMostFrequentNumberV2(numberList)", () => {
  test("should return 0  if numberList is not an array", () => {
    expect(findMostFrequentNumberV2(3)).toBe(0);
    expect(findMostFrequentNumberV2({})).toBe(0);
    expect(findMostFrequentNumberV2(null)).toBe(0);
    expect(findMostFrequentNumberV2(Boolean)).toBe(0);
    expect(findMostFrequentNumberV2("string")).toBe(0);
    expect(findMostFrequentNumberV2(undefined)).toBe(0);
  });
  test("should return 0 if numberList is empty", () => {
    expect(findMostFrequentNumberV2([])).toBe(0);
  });
  test("should return most frequent number", () => {
    expect(findMostFrequentNumberV2([1])).toBe(1);
    expect(findMostFrequentNumberV2([1, 2])).toBe(1);
    expect(findMostFrequentNumberV2([1, 2, 3, 2])).toBe(2);
    expect(findMostFrequentNumberV2([1, 2, 3, 2, 3, 4])).toBe(2);
    expect(findMostFrequentNumberV2([1, 2, 3, 2, 3, 3, 4])).toBe(3);
  });
});
