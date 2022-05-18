/**ARRAY-CD-01: Thêm một phần tử tại vị trí k
Viết hàm insert(arr, newItem, k) để thêm một phần tử mới newItem vào vị trí k (zero based) của mảng arr
Nếu k lớn hơn độ dài của mảng thì thêm vào cuối mảng
Nếu k bé hơn hoặc bằng 0 thì thêm vào đàu mảng
insert([1, 2, 3], 0, -1); // [0, 1, 2, 3]
insert([1, 2, 3], 4, 10); // [1, 2, 3, 4]
insert([1, 2, 3], 10, 2); // [1, 2, 10, 3] */

import { insert } from "./arr-CD-1";
describe("insert(arr, newItem, k)", () => {
  test("should return 0 if arr is not an array", () => {
    expect(insert(3)).toBe(0);
    expect(insert({})).toBe(0);
    expect(insert(null)).toBe(0);
    expect(insert(Boolean)).toBe(0);
    expect(insert("string")).toBe(0);
    expect(insert(undefined)).toBe(0);
  });
  test("should return 0 if arr is empty", () => {
    expect(insert([])).toBe(0);
  });
  test("should return 0 if k is not a number", () => {
    expect(insert([1, 2, 3], 3, "str")).toBe(0);
    expect(insert([1, 2, 3], 3, true)).toBe(0);
    expect(insert([1, 2, 3], 3)).toBe(0);
    expect(insert([1, 2, 3], 3, null)).toBe(0);
    expect(insert([1, 2, 3], 3, [])).toBe(0);
    expect(insert([1, 2, 3], 3, {})).toBe(0);
  });
  test("should return an inserted array", () => {
    expect(insert([1, 2, 3], 9, 0)).toEqual([9, 1, 2, 3]);
    expect(insert([1, 2, 3], 50, -1)).toEqual([50, 1, 2, 3]);
    expect(insert([1, 2, 3], 9, 5)).toEqual([1, 2, 3, 9]);
    expect(insert([1, 2, 3], 9, 2)).toEqual([1, 2, 9, 3]);
    expect(insert([1, 2, 3, 4, 5, 6], 10, 3)).toEqual([1, 2, 3, 10, 4, 5, 6]);
  });
});
