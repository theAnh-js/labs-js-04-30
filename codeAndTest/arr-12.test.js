/**ARRAY-CHECK-12: Kiểm tra mảng có số fibonaci nhỏ hơn 100 không?
Viết hàm hasFibonaciNumber(numberList) để kiểm tra xem trong mảng numberList có chứa một số
fibonaci nhỏ hơn 100 không?
Việc đầu tiên là viết hàm để generate ra cái list fibonaci numbers nhỏ hơn 100. Nếu bạn chưa biết
fibonaci là gì thì đọc ở đây nhé
Việc tiếp theo là kiểm tra trong mảng đầu vào có chứa con số fibonaci nhỏ hơn 100 không? Trả về
true nếu có, ngược lại trả về false. */
/**hasFibonaciNumber([4, 6, 7]); // false
hasFibonaciNumber([0, 1, 2, 3, 4, 5]); // true
hasFibonaciNumber([89]); // true*/

import { hasFibonaciNumber } from "./arr-12";
describe("hasFibonaciNumber(numberList)", () => {
  test("should return false if numberList is empty", () => {
    expect(hasFibonaciNumber([])).toBe(false);
  });
  test("should return false if numberList is not an array", () => {
    expect(hasFibonaciNumber(NaN)).toBe(false);
    expect(hasFibonaciNumber(null)).toBe(false);
    expect(hasFibonaciNumber(1234)).toBe(false);
    expect(hasFibonaciNumber("easy")).toBe(false);
    expect(hasFibonaciNumber(undefined)).toBe(false);
    expect(hasFibonaciNumber({ number: 222 })).toBe(false);
  });

  test("should return false if has no a fibonaci number", () => {
    expect(hasFibonaciNumber([4, 7, 9])).toBe(false);
    expect(hasFibonaciNumber([4, 7, 9, 35, 36])).toBe(false);
    expect(hasFibonaciNumber([4, 7, 9, 40, 43, 41])).toBe(false);
    expect(hasFibonaciNumber([4, 7, 9, 111, 112, 140])).toBe(false);
  });
  test("should return fasle if has fibonace greater than 100", () => {
    expect(hasFibonaciNumber([4, 144, 7, 9])).toBe(false);
    expect(hasFibonaciNumber([4, 7, 9, 144, 35, 36])).toBe(false);
    expect(hasFibonaciNumber([4, 7, 9, 40, 144, 43, 41])).toBe(false);
    expect(hasFibonaciNumber([144, 4, 7, 9, 111, 112, 140])).toBe(false);
  });
  test("should return true if has a fibonaci number", () => {
    expect(hasFibonaciNumber([3, 144, 4, 5, 6])).toBe(true);
    expect(hasFibonaciNumber([13, 7, 7, 7])).toBe(true);
    expect(hasFibonaciNumber([21, 35, 36, , 56])).toBe(true);
    expect(hasFibonaciNumber([0, 1, 1, 2, 3, 5, 5, 2, 4, 5])).toBe(true);
  });
});
