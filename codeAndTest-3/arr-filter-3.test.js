/**ARRAY-FILTER-03: Dãy số fibonaci nhỏ hơn n
Viết hàm generateFibonaci(n) để tạo ra mảng các số fibonaci nhỏ hơn n (0 < n < 1000) */

import {
  generateFibonaci,
  generateFibonaciV2,
  generateFibonaciV3,
} from "./arr-filter-3";
describe("generateFibonaci(n)", () => {
  test("should retun an empty array if n is a number", () => {
    expect(generateFibonaci(" ")).toEqual([]);
    expect(generateFibonaci({})).toEqual([]);
    expect(generateFibonaci(null)).toEqual([]);
    expect(generateFibonaci(Boolean)).toEqual([]);
    expect(generateFibonaci(NaN)).toEqual([]);
    expect(generateFibonaci(undefined)).toEqual([]);
  });
  test("should return empty array if numberList is empty or only one element", () => {
    expect(generateFibonaci([])).toEqual([]);
  });
  test("should return empty array if n <= 0 or n >= 1000", () => {
    expect(generateFibonaci(0)).toEqual([]);
    expect(generateFibonaci(-1)).toEqual([]);
    expect(generateFibonaci(1000)).toEqual([]);
    expect(generateFibonaci(1288)).toEqual([]);
  });
  test("should return list fibonaci number less than n", () => {
    expect(generateFibonaci(1)).toEqual([0]);
    expect(generateFibonaci(7)).toEqual([0, 1, 1, 2, 3, 5]);
    expect(generateFibonaci(14)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    expect(generateFibonaci(20)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    expect(generateFibonaci(57)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});

describe("generateFibonaciV2(n)", () => {
  test("should retun an empty array if n is a number", () => {
    expect(generateFibonaciV2(" ")).toEqual([]);
    expect(generateFibonaciV2({})).toEqual([]);
    expect(generateFibonaciV2(null)).toEqual([]);
    expect(generateFibonaciV2(Boolean)).toEqual([]);
    expect(generateFibonaciV2(NaN)).toEqual([]);
    expect(generateFibonaciV2(undefined)).toEqual([]);
  });
  test("should return empty array if numberList is empty or only one element", () => {
    expect(generateFibonaciV2([])).toEqual([]);
  });
  test("should return empty array if n <= 0 or n >= 1000", () => {
    expect(generateFibonaciV2(0)).toEqual([]);
    expect(generateFibonaciV2(-1)).toEqual([]);
    expect(generateFibonaciV2(1000)).toEqual([]);
    expect(generateFibonaciV2(1288)).toEqual([]);
  });
  test("should return list fibonaci number less than n", () => {
    expect(generateFibonaciV2(1)).toEqual([0]);
    expect(generateFibonaciV2(7)).toEqual([0, 1, 1, 2, 3, 5]);
    expect(generateFibonaciV2(14)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    expect(generateFibonaciV2(20)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    expect(generateFibonaciV2(57)).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
    ]);
  });
});

describe("generateFibonaciV3(n)", () => {
  test("should retun an empty array if n is a number", () => {
    expect(generateFibonaciV3(" ")).toEqual([]);
    expect(generateFibonaciV3({})).toEqual([]);
    expect(generateFibonaciV3(null)).toEqual([]);
    expect(generateFibonaciV3(Boolean)).toEqual([]);
    expect(generateFibonaciV3(NaN)).toEqual([]);
    expect(generateFibonaciV3(undefined)).toEqual([]);
  });
  test("should return empty array if numberList is empty or only one element", () => {
    expect(generateFibonaciV3([])).toEqual([]);
  });
  test("should return empty array if n <= 0 or n >= 1000", () => {
    expect(generateFibonaciV3(0)).toEqual([]);
    expect(generateFibonaciV3(-1)).toEqual([]);
    expect(generateFibonaciV3(1000)).toEqual([]);
    expect(generateFibonaciV3(1288)).toEqual([]);
  });
  test("should return list fibonaci number less than n", () => {
    expect(generateFibonaciV3(1)).toEqual([0]);
    expect(generateFibonaciV3(7)).toEqual([0, 1, 1, 2, 3, 5]);
    expect(generateFibonaciV3(14)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    expect(generateFibonaciV3(20)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    expect(generateFibonaciV3(57)).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
    ]);
  });
});
