/**
 * ARRAY-FIND-01: Tìm số dương nhỏ nhất trong mảng
  Viết hàm findMinPositive(numberList) để tìm ra số dương nhỏ nhất trong mảng.
 */
import { findMinPositive, findMinPositiveV2 } from "./arr-find-1";

//v1

describe("findMinPositive(numberList)", () => {
  test("should return undefined if numberList is not an array", () => {
    expect(findMinPositive(3)).toBe(undefined);
    expect(findMinPositive({})).toBe(undefined);
    expect(findMinPositive(null)).toBe(undefined);
    expect(findMinPositive(Boolean)).toBe(undefined);
    expect(findMinPositive("string")).toBe(undefined);
    expect(findMinPositive(undefined)).toBe(undefined);
  });
  test("should return undefined if numberList is empty", () => {
    expect(findMinPositive([])).toBe(undefined);
  });
  test("should return undefined if numberList has no positive number", () => {
    expect(findMinPositive([0, -3])).toBe(undefined);
    expect(findMinPositive([-1, -3])).toBe(undefined);
    expect(findMinPositive([0, -3, -39])).toBe(undefined);
  });
  test("should return a min positive number", () => {
    expect(findMinPositive([-5, -3, 3, 5])).toBe(3);
    expect(findMinPositive([5, 6, 7, 8, 8, 1, 33])).toBe(1);
    expect(findMinPositive([-3, 300, -5, 100])).toBe(100);
    expect(findMinPositive([-300, 3000, 500, 900])).toBe(500);
    expect(findMinPositive([-5, -3, 3, 2, 5, 1, 4, 5])).toBe(1);
  });
});

//V2

describe("findMinPositiveV2(numberList)", () => {
  test("should return undefined if numberList is not an array", () => {
    expect(findMinPositiveV2(3)).toBe(undefined);
    expect(findMinPositiveV2({})).toBe(undefined);
    expect(findMinPositiveV2(null)).toBe(undefined);
    expect(findMinPositiveV2(Boolean)).toBe(undefined);
    expect(findMinPositiveV2("string")).toBe(undefined);
    expect(findMinPositiveV2(undefined)).toBe(undefined);
  });
  test("should return undefined if numberList is empty", () => {
    expect(findMinPositiveV2([])).toBe(undefined);
  });
  test("should return undefined if numberList has no positive number", () => {
    expect(findMinPositiveV2([0, -3])).toBe(undefined);
    expect(findMinPositiveV2([-1, -3])).toBe(undefined);
    expect(findMinPositiveV2([0, -3, -39])).toBe(undefined);
  });
  test("should return a min positive number", () => {
    expect(findMinPositiveV2([-5, -3, 3, 2, 5, 1, 4, 5])).toBe(1);
    expect(findMinPositiveV2([5, 6, 7, 8, 8, 1, 33])).toBe(1);
    expect(findMinPositiveV2([-3, 300, -5, 100])).toBe(100);
    expect(findMinPositiveV2([-300, 3000, 500, 900])).toBe(500);
  });
});
