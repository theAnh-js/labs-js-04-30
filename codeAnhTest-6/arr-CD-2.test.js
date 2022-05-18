/**ARRAY-CD-02: Xoá một phần tử tại vị trí k
Viết hàm remove(arr, k, n) để xoá n phần tử ra khỏi mảng arr kể từ vị trị k (zero based)

Nếu k < 0 hoặc k >= arr.length thì trả về mảng hiện tại.
Nếu k hợp lệ thì remove n phần tử kể tử vị trí k và trả về mảng kết quả.
Nếu n không truyền vào thì remove tới cuối mảng.
Lưu ý không được làm thay đổi mảng arr truyền vào.

remove([1, 2, 3], -1, 10); // [1, 2, 3]
remove([1, 2, 3], 3, 10); // [1, 2, 3]
remove([1, 2, 3], 1, 2); // [1]
remove([1, 2, 3], 0); // [] */

import { remove } from "./arr-CD-2";
describe("remove(arr, k, n)", () => {
  test("should return 0 if arr is not an array", () => {
    expect(remove(3)).toBe(0);
    expect(remove({})).toBe(0);
    expect(remove(null)).toBe(0);
    expect(remove(Boolean)).toBe(0);
    expect(remove("string")).toBe(0);
    expect(remove(undefined)).toBe(0);
  });
  test("should return 0 if arr is empty", () => {
    expect(remove([])).toBe(0);
  });

  test("should return 0 if k is not a number", () => {
    expect(remove([1, 2, 3], "str", 3)).toBe(0);
    expect(remove([1, 2, 3], true, 3)).toBe(0);
    expect(remove([1, 2, 3], null, 3)).toBe(0);
    expect(remove([1, 2, 3], [], 3)).toBe(0);
    expect(remove([1, 2, 3], undefined, 3)).toBe(0);
    expect(remove([1, 2, 3], {}, 3)).toBe(0);
  });
  test("should return 0 if n is not a number, however n can be undefined", () => {
    expect(remove([1, 2, 3], 3, "str")).toBe(0);
    expect(remove([1, 2, 3], 3, true)).toBe(0);
    expect(remove([1, 2, 3], 3, null)).toBe(0);
    expect(remove([1, 2, 3], 3, [])).toBe(0);
    expect(remove([1, 2, 3], 3, {})).toBe(0);
  });

  test("should return an removed array", () => {
    expect(remove([1, 2, 3], -1, 10)).toEqual([1, 2, 3]);
    expect(remove([1, 2, 3], 3, 10)).toEqual([1, 2, 3]);
    expect(remove([1, 2, 3], 1, 2)).toEqual([1]);
    expect(remove([1, 2, 3, 4, 5], 4, 2)).toEqual([1, 2, 3, 4]);
    expect(remove([1, 2, 3, 4, 5], 3, 2)).toEqual([1, 2, 3]);
    expect(remove([1, 2, 3, 4, 5], 3, 1)).toEqual([1, 2, 3, 5]);
    expect(remove([1, 2, 3], 0)).toEqual([]);
    expect(remove([1, 2, 3, 1, 2, 3], 4)).toEqual([1, 2, 3, 1]);
  });
});
