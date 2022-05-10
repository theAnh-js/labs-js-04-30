/**ARRAY-FIND-05: Tìm số lớn thứ 2 trong mảng
Viết hàm findSecondLargestNumber(numberList) để tìm ra số lớn thứ 2 trong mảng numberList*/
/**findSecondLargestNumber([1]); // undefined
findSecondLargestNumber([1, 2]); // 1
findSecondLargestNumber([1, 2, 3, 4]); // 3
*/

import {
  findSecondLargestNumber,
  findSecondLargestNumberV2,
} from "./arr-find-5";
describe("findSecondLargestNumber(numberList)", () => {
  test("should return undefined if numberList is not an array", () => {
    expect(findSecondLargestNumber(3)).toBe(undefined);
    expect(findSecondLargestNumber({})).toBe(undefined);
    expect(findSecondLargestNumber(null)).toBe(undefined);
    expect(findSecondLargestNumber(Boolean)).toBe(undefined);
    expect(findSecondLargestNumber("string")).toBe(undefined);
    expect(findSecondLargestNumber(undefined)).toBe(undefined);
  });
  test("should return undefined when numberList is empty", () => {
    expect(findSecondLargestNumber([])).toBe(undefined);
  });
  test("should return undefined when numberList has only one element", () => {
    expect(findSecondLargestNumber([2])).toBe(undefined);
    expect(findSecondLargestNumber([200])).toBe(undefined);
  });
  test("should return undefined when numberList has the same number as numberList", () => {
    expect(findSecondLargestNumber([1, 1, 1, 1, 1, 1])).toBe(undefined);
    expect(findSecondLargestNumber([-2, -2, -2, -2, -2, -2])).toBe(undefined);
    expect(findSecondLargestNumber([10, 10, 10, 10, 10, 10])).toBe(undefined);
  });
  test("should return second largest number", () => {
    expect(
      findSecondLargestNumber([
        -3, -4, -9, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2,
      ])
    ).toBe(1);
    expect(findSecondLargestNumber([-1, -2, -1, -1, -2, -2])).toBe(-2);
    expect(findSecondLargestNumber([-1, -2, -2])).toBe(-2);
    expect(findSecondLargestNumber([1, 2, 3, 3, 4])).toBe(3);
    expect(findSecondLargestNumber([12, 3, 35, 66])).toBe(35);
    expect(findSecondLargestNumber([-3, -4, -6, 0, 2])).toBe(0);
    expect(findSecondLargestNumber([2022, 2020, 2021, 2023])).toBe(2022);
    expect(findSecondLargestNumber([2020, 2021, 2022, 2023, 20223])).toBe(2023);
  });
});

//V2
describe("findSecondLargestNumberV2(numberList)", () => {
  test("should return undefined if numberList is not an array", () => {
    expect(findSecondLargestNumberV2(3)).toBe(undefined);
    expect(findSecondLargestNumberV2({})).toBe(undefined);
    expect(findSecondLargestNumberV2(null)).toBe(undefined);
    expect(findSecondLargestNumberV2(Boolean)).toBe(undefined);
    expect(findSecondLargestNumberV2("string")).toBe(undefined);
    expect(findSecondLargestNumberV2(undefined)).toBe(undefined);
  });
  test("should return undefined when numberList is empty", () => {
    expect(findSecondLargestNumberV2([])).toBe(undefined);
  });
  test("should return undefined when numberList has only one element", () => {
    expect(findSecondLargestNumberV2([2])).toBe(undefined);
    expect(findSecondLargestNumberV2([200])).toBe(undefined);
  });
  test("should return undefined when numberList has the same number as numberList", () => {
    expect(findSecondLargestNumberV2([1, 1, 1, 1, 1, 1])).toBe(undefined);
    expect(findSecondLargestNumberV2([-2, -2, -2, -2, -2, -2])).toBe(undefined);
    expect(findSecondLargestNumberV2([10, 10, 10, 10, 10, 10])).toBe(undefined);
  });
  test("should return second largest number", () => {
    expect(
      findSecondLargestNumberV2([
        -3, -4, -9, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2,
      ])
    ).toBe(1);
    expect(findSecondLargestNumberV2([-1, -2, -1, -1, -2, -2])).toBe(-2);
    expect(findSecondLargestNumberV2([-1, -2, -2])).toBe(-2);
    expect(findSecondLargestNumberV2([1, 2, 3, 3, 4])).toBe(3);
    expect(findSecondLargestNumberV2([12, 3, 35, 66])).toBe(35);
    expect(findSecondLargestNumberV2([-3, -4, -6, 0, 2])).toBe(0);
    expect(findSecondLargestNumberV2([2022, 2020, 2021, 2023])).toBe(2022);
    expect(findSecondLargestNumberV2([2020, 2021, 2022, 2023, 20223])).toBe(
      2023
    );
  });
});
