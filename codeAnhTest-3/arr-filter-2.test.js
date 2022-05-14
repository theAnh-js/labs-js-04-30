/**ARRAY-FILTER-02: Tìm tất cả các số mà nó lớn hơn số đứng trước nó
Viết hàm findNumbers(numberList) để tìm ra các số thoả điều kiện là lớn hơn số đứng trước nó (không
tính số đầu tiên).
findNumbers([1]); // []
findNumbers([2, 5, 3, 7]); // [5, 7] vì 5 > 2 và 7 > 3 */
import { findNumbers, findNumbersV2, findNumbersV3 } from "./arr-filter-2";
describe("findNumbers(numberList)", () => {
  test("should return empty array if numberList is not an array", () => {
    expect(findNumbers(3)).toEqual([]);
    expect(findNumbers({})).toEqual([]);
    expect(findNumbers(null)).toEqual([]);
    expect(findNumbers(Boolean)).toEqual([]);
    expect(findNumbers("string")).toEqual([]);
    expect(findNumbers(undefined)).toEqual([]);
  });
  test("should return empty array if numberList is empty or only one element", () => {
    expect(findNumbers([])).toEqual([]);
    expect(findNumbers([7])).toEqual([]);
    expect(findNumbers([3])).toEqual([]);
  });
  test("should return empty array if no found a invalid number", () => {
    expect(findNumbers([7, 5, 5])).toEqual([]);
    expect(findNumbers([5, 5, 5])).toEqual([]);
    expect(findNumbers([36, 33, 5])).toEqual([]);
    expect(findNumbers([37, 34, 23, 23])).toEqual([]);
  });
  test("should return list of invalid numbers", () => {
    expect(findNumbers([2, 3, 6, 6, 7])).toEqual([3, 6, 7]);
    expect(findNumbers([33, 6, 7, 8, 3, 2, 5])).toEqual([7, 8, 5]);
    expect(findNumbers([33, 6, 7, 8, 3, 2, 5, 8, 9])).toEqual([7, 8, 5, 9]);
  });
});

describe("findNumbersV2(numberList)", () => {
  test("should return empty array if numberList is not an array", () => {
    expect(findNumbersV2(3)).toEqual([]);
    expect(findNumbersV2({})).toEqual([]);
    expect(findNumbersV2(null)).toEqual([]);
    expect(findNumbersV2(Boolean)).toEqual([]);
    expect(findNumbersV2("string")).toEqual([]);
    expect(findNumbersV2(undefined)).toEqual([]);
  });
  test("should return empty array if numberList is empty or only one element", () => {
    expect(findNumbersV2([])).toEqual([]);
    expect(findNumbersV2([7])).toEqual([]);
    expect(findNumbersV2([3])).toEqual([]);
  });
  test("should return empty array if no found a invalid number", () => {
    expect(findNumbersV2([7, 5, 5])).toEqual([]);
    expect(findNumbersV2([5, 5, 5])).toEqual([]);
    expect(findNumbersV2([36, 33, 5])).toEqual([]);
    expect(findNumbersV2([37, 34, 23, 23])).toEqual([]);
  });
  test("should return list of invalid numbers", () => {
    expect(findNumbersV2([2, 3, 6, 6, 7])).toEqual([3, 6, 7]);
    expect(findNumbersV2([33, 6, 7, 8, 3, 2, 5])).toEqual([7, 8, 5]);
    expect(findNumbersV2([33, 6, 7, 8, 3, 2, 5, 8, 9])).toEqual([7, 8, 5, 9]);
  });
});

describe("findNumbersV3(numberList)", () => {
  test("should return empty array if numberList is not an array", () => {
    expect(findNumbersV3(3)).toEqual([]);
    expect(findNumbersV3({})).toEqual([]);
    expect(findNumbersV3(null)).toEqual([]);
    expect(findNumbersV3(Boolean)).toEqual([]);
    expect(findNumbersV3("string")).toEqual([]);
    expect(findNumbersV3(undefined)).toEqual([]);
  });
  test("should return empty array if numberList is empty or only one element", () => {
    expect(findNumbersV3([])).toEqual([]);
    expect(findNumbersV3([7])).toEqual([]);
    expect(findNumbersV3([3])).toEqual([]);
  });
  test("should return empty array if no found a invalid number", () => {
    expect(findNumbersV3([7, 5, 5])).toEqual([]);
    expect(findNumbersV3([5, 5, 5])).toEqual([]);
    expect(findNumbersV3([36, 33, 5])).toEqual([]);
    expect(findNumbersV3([37, 34, 23, 23])).toEqual([]);
  });
  test("should return list of invalid numbers", () => {
    expect(findNumbersV3([2, 3, 6, 6, 7])).toEqual([3, 6, 7]);
    expect(findNumbersV3([33, 6, 7, 8, 3, 2, 5])).toEqual([7, 8, 5]);
    expect(findNumbersV3([33, 6, 7, 8, 3, 2, 5, 8, 9])).toEqual([7, 8, 5, 9]);
  });
});
