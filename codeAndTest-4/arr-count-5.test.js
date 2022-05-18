/**ARRAY-COUNT-05: Ðếm số lượng các số có trong mảng a mà không có trong mảng b
Viết hàm countNumbersNotInB(a, b) để đếm có bao nhiếu số xuất hiện trong mảng a, mà không có trong
mảng b
countNumbersNotInB([1, 2, 3], [4, 5]); // 3
countNumbersNotInB([1, 2, 3], [1, 2, 3]); // 0
countNumbersNotInB([1, 2, 3], [3, 4, 5]); // 2 */

import { countNumbersNotInB, countNumbersNotInBV2 } from "./arr-count-5";
describe("countNumbersNotInB(a, b)", () => {
  test("should return 0 if a is not an array", () => {
    expect(countNumbersNotInB([2, 3, 4], 3)).toBe(0);
    expect(countNumbersNotInB([2, 3, 4], {})).toBe(0);
    expect(countNumbersNotInB([2, 3, 4], null)).toBe(0);
    expect(countNumbersNotInB([2, 3, 4], Boolean)).toBe(0);
    expect(countNumbersNotInB([2, 3, 4], "string")).toBe(0);
    expect(countNumbersNotInB([2, 3, 4], undefined)).toBe(0);
  });
  test("should return 0 if  is not an array", () => {
    expect(countNumbersNotInB(3, [2, 3, 4])).toBe(0);
    expect(countNumbersNotInB({}, [2, 3, 4])).toBe(0);
    expect(countNumbersNotInB(null, [2, 3, 4])).toBe(0);
    expect(countNumbersNotInB(Boolean, [2, 3, 4])).toBe(0);
    expect(countNumbersNotInB("string", [2, 3, 4])).toBe(0);
    expect(countNumbersNotInB(undefined, [2, 3, 4])).toBe(0);
  });
  test("should return 0 if a, b is empty", () => {
    expect(countNumbersNotInB([], [])).toBe(0);
    expect(countNumbersNotInB([], [3, 5, 5])).toBe(0);
    expect(countNumbersNotInB([3, 5, 5], [])).toBe(0);
  });
  test("should return 0 if elements of a and b equal", () => {
    expect(countNumbersNotInB([2, 3], [3, 2])).toBe(0);
    expect(countNumbersNotInB([2, 3, 4], [2, 3, 4])).toBe(0);
    expect(countNumbersNotInB([1, 5, 7, 8], [8, 5, 7, 1])).toBe(0);
  });
  test("should return acount of elements that in a but not in b", () => {
    expect(countNumbersNotInB([2, 3, 6, 8], [3, 2, 3, 3])).toBe(2);
    expect(countNumbersNotInB([2, 33, 66, 3, 4, 10], [2, 3, 4, 2, 3, 4])).toBe(
      3
    );
    expect(countNumbersNotInB([0, 4, 7, 6, 5, 1, 7, 8], [8, 5, 7, 1])).toBe(3);
    expect(countNumbersNotInB([1, 2, 3], [3, 4, 5])).toBe(2);
  });
});

//V2
describe("countNumbersNotInBV2(a, b)", () => {
  test("should return 0 if a is not an array", () => {
    expect(countNumbersNotInBV2([2, 3, 4], 3)).toBe(0);
    expect(countNumbersNotInBV2([2, 3, 4], {})).toBe(0);
    expect(countNumbersNotInBV2([2, 3, 4], null)).toBe(0);
    expect(countNumbersNotInBV2([2, 3, 4], Boolean)).toBe(0);
    expect(countNumbersNotInBV2([2, 3, 4], "string")).toBe(0);
    expect(countNumbersNotInBV2([2, 3, 4], undefined)).toBe(0);
  });
  test("should return 0 if  is not an array", () => {
    expect(countNumbersNotInBV2(3, [2, 3, 4])).toBe(0);
    expect(countNumbersNotInBV2({}, [2, 3, 4])).toBe(0);
    expect(countNumbersNotInBV2(null, [2, 3, 4])).toBe(0);
    expect(countNumbersNotInBV2(Boolean, [2, 3, 4])).toBe(0);
    expect(countNumbersNotInBV2("string", [2, 3, 4])).toBe(0);
    expect(countNumbersNotInBV2(undefined, [2, 3, 4])).toBe(0);
  });
  test("should return 0 if a, b is empty", () => {
    expect(countNumbersNotInBV2([], [])).toBe(0);
    expect(countNumbersNotInBV2([], [3, 5, 5])).toBe(0);
    expect(countNumbersNotInBV2([3, 5, 5], [])).toBe(0);
  });
  test("should return 0 if elements of a and b equal", () => {
    expect(countNumbersNotInBV2([2, 3], [3, 2])).toBe(0);
    expect(countNumbersNotInBV2([2, 3, 4], [2, 3, 4])).toBe(0);
    expect(countNumbersNotInBV2([1, 5, 7, 8], [8, 5, 7, 1])).toBe(0);
  });
  test("should return acount of elements that in a but not in b", () => {
    expect(countNumbersNotInBV2([2, 3, 6, 8], [3, 2, 3, 3])).toBe(2);
    expect(
      countNumbersNotInBV2([2, 33, 66, 3, 4, 10], [2, 3, 4, 2, 3, 4])
    ).toBe(3);
    expect(countNumbersNotInBV2([0, 4, 7, 6, 5, 1, 7, 8], [8, 5, 7, 1])).toBe(
      3
    );
    expect(countNumbersNotInBV2([1, 2, 3], [3, 4, 5])).toBe(2);
  });
});
