/**ARRAY-CD-05: Xoá các số trùng nhau trong mảng
Viết hàm removeDuplicatedNumbers(numberList) để xoá tất cả các số xuất hiện hơn 1 lần.
removeDuplicatedNumbers([1, 1, 2, 3, 2]); // [3]
removeDuplicatedNumbers([1, 2, 3]); // [1, 2, 3]
removeDuplicatedNumbers([1, 1]); // [1] */
import { removeDuplicatedNumbers } from "./arr-CD-5";
describe("removeDuplicatedNumbers(numberList)", () => {
  test("should return [] if studentList is not an array", () => {
    expect(removeDuplicatedNumbers(3)).toEqual([]);
    expect(removeDuplicatedNumbers({})).toEqual([]);
    expect(removeDuplicatedNumbers(null)).toEqual([]);
    expect(removeDuplicatedNumbers(Boolean)).toEqual([]);
    expect(removeDuplicatedNumbers("string")).toEqual([]);
    expect(removeDuplicatedNumbers(undefined)).toEqual([]);
  });
  test("should return empty array when numberList is empty", () => {
    expect(removeDuplicatedNumbers([])).toEqual([]);
  });
  test("should return new array after remove duplicate numbers", () => {
    expect(removeDuplicatedNumbers([1, 1, 2, 3, 2])).toEqual([3]);
    expect(removeDuplicatedNumbers([1, 2, 3])).toEqual([1, 2, 3]);
    expect(removeDuplicatedNumbers([1, 1])).toEqual([1]);
    expect(removeDuplicatedNumbers([1, 1, 1])).toEqual([1]);
    expect(removeDuplicatedNumbers([1, 1, 1, 1])).toEqual([1]);
    expect(removeDuplicatedNumbers([1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual([1]);
    expect(removeDuplicatedNumbers([1, 1, 1, 1, 2])).toEqual([2]);
  });
});
