/**ARRAY-CHECK-09: Kiểm tra mảng có tăng dần không
Viết hàm isIncreasingNumberList(numberList) để kiểm tra xem mảng số này có phải tăng dần không?
Mảng tăng dần cần thoả các điều kiện sau:
Có ít nhất 2 phần tử 
Phần tử sau luôn lớn hớn phần tử đứng trước nó.
*/
/**isIncreasingNumberList([1, 1]); // false
isIncreasingNumberList([1, 2]); // true
isIncreasingNumberList([2, 1]); // false */

import { isIncreasingNumberList } from "./arr-09";
describe("isIncreasingNumberList(numberList)", () => {
  test("should return false if numberList is empty or its length less than 2", () => {
    expect(isIncreasingNumberList([])).toBe(false);
    expect(isIncreasingNumberList([1])).toBe(false);
  });
  test("should return false if numberList is not an array", () => {
    expect(isIncreasingNumberList(NaN)).toBe(false);
    expect(isIncreasingNumberList(null)).toBe(false);
    expect(isIncreasingNumberList(1234)).toBe(false);
    expect(isIncreasingNumberList("easy")).toBe(false);
    expect(isIncreasingNumberList(undefined)).toBe(false);
    expect(isIncreasingNumberList({ number: 222 })).toBe(false);
  });
  test("should return false if after element less than before element in numberList", () => {
    expect(isIncreasingNumberList([1, 0])).toBe(false);
    expect(isIncreasingNumberList([2, 2, 2, 2, 2, 2])).toBe(false);
    expect(isIncreasingNumberList([1, 2, 4, 5, 2, 1])).toBe(false);
    expect(isIncreasingNumberList([1, 2, 4, 5, 5, 5])).toBe(false);
    expect(isIncreasingNumberList([23, 43, 3, 4, 333])).toBe(false);
    expect(isIncreasingNumberList([22, 33, 55, 66, 11])).toBe(false);
  });
  test("should return true when numberList is a increasing number list", () => {
    expect(isIncreasingNumberList([1, 2, 3, 4, 5, 6])).toBe(true);
    expect(isIncreasingNumberList([0, 10, 100, 1999])).toBe(true);
    expect(isIncreasingNumberList([10, 35, 44, 77, 88])).toBe(true);
    expect(isIncreasingNumberList([1, 222, 3333, 4444, 5555, 66666])).toBe(
      true
    );
  });
});
