/**ARRAY-CD-04: Cho một mảng đã được sắp xếp tăng dần. Cho một số, nhờ bạn add vào mảng
nhưng phải đảm bảo mảng vẫn đc sắp xếp tăng dần.
Viết hàm insert(numberList, newNumber) để chèn newNumber vào mảng numberList sao cho mảng kết
quả vẫn là tăng dần.
insert([], 3); // [3]
insert([1, 2, 4], 3); // [1, 2, 3, 4]
insert([1, 2, 3], 3); // [1, 2, 3, 3] */

import { insert } from "./arr-CD-4";
describe("insert(numberList, newNumber)", () => {
  test("should return [] if studentList is not an array", () => {
    expect(insert(3)).toEqual([]);
    expect(insert({})).toEqual([]);
    expect(insert(null)).toEqual([]);
    expect(insert(Boolean)).toEqual([]);
    expect(insert("string")).toEqual([]);
    expect(insert(undefined)).toEqual([]);
  });
  test("should return [] if newNumber is not a number", () => {
    expect(insert([1, 3, 5, 6], "str")).toEqual([]);
    expect(insert([1, 3, 5, 6], undefined)).toEqual([]);
    expect(insert([1, 3, 5, 6], null)).toEqual([]);
    expect(insert([1, 3, 5, 6], true)).toEqual([]);
    expect(insert([1, 3, 5, 6], {})).toEqual([]);
    expect(insert([1, 3, 5, 6], false)).toEqual([]);
    expect(insert([1, 3, 5, 6], [])).toEqual([]);
  });
  test("should return new increasing array after add newnumber", () => {
    expect(insert([], 3)).toEqual([3]);
    expect(insert([1, 2, 3], 6)).toEqual([1, 2, 3, 6]);
    expect(insert([1, 2, 3], 6)).toEqual([1, 2, 3, 6]);
    expect(insert([1, 2, 3], 3)).toEqual([1, 2, 3, 3]);
    expect(insert([1, 2, 4], 3)).toEqual([1, 2, 3, 4]);
  });
});
