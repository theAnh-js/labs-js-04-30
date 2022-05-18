/**ARRAY-FILTER-01: Liệt kê các số trong khoảng [a, b]
Viết hàm generateNumberInRange(a, b) để tạo ra một mảng các số từ a đến b (có bao gồm a và b)
*/
/**generateNumberInRange(1, 5); // [1, 2, 3, 4, 5]
generateNumberInRange(5, 7); // [5, 6, 7]
generateNumberInRange(7, 5); // [] */

import { generateNumberInRange, generateNumberInRangeV2 } from "./arr-filter-1";
describe("generateNumberInRange(a, b)", () => {
  test("should return empty array if a or b is not a number", () => {
    expect(generateNumberInRange("", 3)).toEqual([]);
    expect(generateNumberInRange("str", 3)).toEqual([]);
    expect(generateNumberInRange(4, "3")).toEqual([]);
    expect(generateNumberInRange(true, 3)).toEqual([]);
    expect(generateNumberInRange(false, 3)).toEqual([]);
    expect(generateNumberInRange([2], 3)).toEqual([]);
    expect(generateNumberInRange(2, null)).toEqual([]);
  });
  test("should return empty array if a greater than b", () => {
    expect(generateNumberInRange(3, 2)).toEqual([]);
    expect(generateNumberInRange(5, 3)).toEqual([]);
    expect(generateNumberInRange(1, 0)).toEqual([]);
    expect(generateNumberInRange(33, 2)).toEqual([]);
    expect(generateNumberInRange(33, 33)).toEqual([]);
  });
  test("should return a array range from a to b", () => {
    expect(generateNumberInRange(3, 6)).toEqual([3, 4, 5, 6]);
    expect(generateNumberInRange(0, 3)).toEqual([0, 1, 2, 3]);
    expect(generateNumberInRange(23, 25)).toEqual([23, 24, 25]);
  });
});

describe("generateNumberInRangeV2(a, b)", () => {
  test("should return empty array if a or b is not a number", () => {
    expect(generateNumberInRangeV2("", 3)).toEqual([]);
    expect(generateNumberInRangeV2("str", 3)).toEqual([]);
    expect(generateNumberInRangeV2(4, "3")).toEqual([]);
    expect(generateNumberInRangeV2(true, 3)).toEqual([]);
    expect(generateNumberInRangeV2(false, 3)).toEqual([]);
    expect(generateNumberInRangeV2([2], 3)).toEqual([]);
    expect(generateNumberInRangeV2(2, null)).toEqual([]);
  });
  test("should return empty array if a greater than b", () => {
    expect(generateNumberInRangeV2(3, 2)).toEqual([]);
    expect(generateNumberInRangeV2(5, 3)).toEqual([]);
    expect(generateNumberInRangeV2(1, 0)).toEqual([]);
    expect(generateNumberInRangeV2(33, 2)).toEqual([]);
    expect(generateNumberInRangeV2(33, 33)).toEqual([]);
  });
  test("should return a array range from a to b", () => {
    expect(generateNumberInRangeV2(3, 6)).toEqual([3, 4, 5, 6]);
    expect(generateNumberInRangeV2(0, 3)).toEqual([0, 1, 2, 3]);
    expect(generateNumberInRangeV2(23, 25)).toEqual([23, 24, 25]);
  });
});
