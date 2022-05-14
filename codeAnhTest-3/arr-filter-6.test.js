/**ARRAY-FILTER-06: Tìm tất cả các số mà bắt đầu bằng chữ số lẻ
Viết hàm findAllNumbers(numberList) để tìm ra tất cả các số có chữ số đầu tiên là chữ số lẻ.
findAllNumbers([1, 5, 6]); // [1, 5]
findAllNumbers([234, 421, 123]); // [123] */
import { findAllNumbers } from "./arr-filter-6";
describe("findAllNumbers(numberList)", () => {
  test("should return empty array if numberList is not an array", () => {
    expect(findAllNumbers(3)).toEqual([]);
    expect(findAllNumbers({})).toEqual([]);
    expect(findAllNumbers(null)).toEqual([]);
    expect(findAllNumbers(Boolean)).toEqual([]);
    expect(findAllNumbers("string")).toEqual([]);
    expect(findAllNumbers(undefined)).toEqual([]);
  });
  test("should return empty array if numberList is empty", () => {
    expect(findAllNumbers([])).toEqual([]);
  });
  test("should return empty array if number list has no number begin by odd number", () => {
    expect(findAllNumbers([2, 22, 24, 25, 23, 67, 65])).toEqual([]);
    expect(findAllNumbers([2, 43, 45, 89, 22, 24, 25, 23, 67, 65])).toEqual([]);
    expect(
      findAllNumbers([2, 22, 24, 25, 23, 67, 65, 89, 88, 80, 87, 81])
    ).toEqual([]);
  });
  test("should return list of number that begin by odd number", () => {
    expect(findAllNumbers([5, 4, 33, 55, 76, 98])).toEqual([5, 33, 55, 76, 98]);
    expect(findAllNumbers([56, 78, 98, 55, 43, 24, 26, 67])).toEqual([
      56, 78, 98, 55,
    ]);
    expect(
      findAllNumbers([5, 4, 33, 55, 5, 76, 98, 101, 11, 1214, 1000])
    ).toEqual([5, 33, 55, 5, 76, 98, 101, 11, 1214, 1000]);
  });
});
