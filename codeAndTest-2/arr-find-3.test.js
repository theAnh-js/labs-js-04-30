/**ARRAY-FIND-03: Tìm số dương chẵn đầu tiên trong mảng
Viết hàm findFirstPositiveEven(numberList) để tìm ra số dương chẵn đầu tiên trong mảng numberList
*/
/**findFirstPositiveEven([1, 4, 5]); // 4
findFirstPositiveEven([1, 3, 5]); // undefined vì không có số dương chẳn
nào*/
import { findFirstPositiveEven } from "./arr-find-3";
describe("findFirstPositiveEven(numberList)", () => {
  test("should return undefined if numberList is not an array", () => {
    expect(findFirstPositiveEven(3)).toBe(undefined);
    expect(findFirstPositiveEven({})).toBe(undefined);
    expect(findFirstPositiveEven(null)).toBe(undefined);
    expect(findFirstPositiveEven(Boolean)).toBe(undefined);
    expect(findFirstPositiveEven("string")).toBe(undefined);
    expect(findFirstPositiveEven(undefined)).toBe(undefined);
  });
  test("should return undefined when numberList is empty", () => {
    expect(findFirstPositiveEven([])).toBe(undefined);
  });
  test("should return undefined if numberList has no positive even number ", () => {
    expect(findFirstPositiveEven([1])).toBe(undefined);
    expect(findFirstPositiveEven([1, 3, 5])).toBe(undefined);
    expect(findFirstPositiveEven([0, 11, 17, 19])).toBe(undefined);
    expect(findFirstPositiveEven([1, 111, 10001])).toBe(undefined);
  });
  test("should return first positive even number", () => {
    expect(findFirstPositiveEven([-2, 4])).toBe(4);
    expect(findFirstPositiveEven([-6, 1, 2, 3, 4])).toBe(2);
    expect(findFirstPositiveEven([1, 4, 2, 3, 4])).toBe(4);
    expect(findFirstPositiveEven([-98, 98, 1, 100, 2, 3, 4])).toBe(98);
  });
});
