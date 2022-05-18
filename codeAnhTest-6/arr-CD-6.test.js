/**ARRAY-CD-06: Xoá các số trùng nhau nhưng giữ lại một số
Viết hàm uniqueArray(numberList) để xoá các số xuần hiện hơn 1 lần, nhưng giữ lại 1 số.
uniqueArray([1, 1, 2, 2, 3]); // [1, 2, 3]
uniqueArray([1, 1, 1, 1]); // [1 */
import { uniqueArray } from "./arr-CD-6";
describe("uniqueArray(numberList)", () => {
  test("should return [] if studentList is not an array", () => {
    expect(uniqueArray(3)).toEqual([]);
    expect(uniqueArray({})).toEqual([]);
    expect(uniqueArray(null)).toEqual([]);
    expect(uniqueArray(Boolean)).toEqual([]);
    expect(uniqueArray("string")).toEqual([]);
    expect(uniqueArray(undefined)).toEqual([]);
  });
  test("should return empty array when numberList is empty", () => {
    expect(uniqueArray([])).toEqual([]);
  });
  test("should return uniqueArray ", () => {
    expect(uniqueArray([1, 1, 1, 4, 5, 5])).toEqual([1, 4, 5]);
    expect(uniqueArray([1, 1, 2, 2, 3])).toEqual([1, 2, 3]);
    expect(uniqueArray([1, 1, 1, 1, 1, 1])).toEqual([1]);
  });
});
