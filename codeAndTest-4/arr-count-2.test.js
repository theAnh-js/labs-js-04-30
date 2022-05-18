/**ARRAY-COUNT-02: Ðếm số mà nó nhỏ hơn số liền trước của nó
Viết hàm countNumbers(numberList) để đếm xem trong mảng có bao nhiêu số mà nó nhỏ hơn số đừng
liền trước của nó.
countNumbers([1, 2, 3]); // 0
countNumbers([1, 2, 3, 10, 9, 8]); // 2 (9 và 8 thoả điều kiện)*/
import { countNumbers } from "./arr-count-2";
describe("countNumbers(numberList)", () => {
  test("should return 0 if numberList is not an array", () => {
    expect(countNumbers(3)).toBe(0);
    expect(countNumbers({})).toBe(0);
    expect(countNumbers(null)).toBe(0);
    expect(countNumbers(Boolean)).toBe(0);
    expect(countNumbers("string")).toBe(0);
    expect(countNumbers(undefined)).toBe(0);
  });
  test("should return 0 if numberList is empty", () => {
    expect(countNumbers([])).toBe(0);
  });
  test("should return 0 if there is no a number that less than before the number", () => {
    expect(countNumbers([1])).toBe(0);
    expect(countNumbers([1, 2, 3, 4, 5])).toBe(0);
    expect(countNumbers([-4, -1, 0, 1, 2, 3, 4, 5])).toBe(0);
  });
  test("should return acount of valid number", () => {
    expect(countNumbers([1, 2, 5, 3, 2, 1])).toBe(3);
    expect(countNumbers([1, 2, 5, 3, 2, 1])).toBe(3);
    expect(countNumbers([3, 6, 33, 22, -1, -3, -5])).toBe(4);
  });
});
