/**ARRAY-SUM-03: Tổng các chữ số nhỏ nhất của số trong mảng
Viết hàm sumAllMinDigits(numberList) để tính tổng các chữ số nhỏ nhất của từng số trong mảng
numberList
sumAllMinDigits([]); // 0
sumAllMinDigits([123]); // 1 vì chỉ lấy chữ số nhỏ nhất của 123 là 1
sumAllMinDigits([123, 532]); // 3 (lấy 1 từ 123 và 2 từ 532, tổng bằng 3)*/
import { sumAllMinDigits } from "./arr-sum-3";
describe("sumAllMinDigits(numberList)", () => {
  test("should return 0 if numberList is not an array", () => {
    expect(sumAllMinDigits(3)).toBe(0);
    expect(sumAllMinDigits({})).toBe(0);
    expect(sumAllMinDigits(null)).toBe(0);
    expect(sumAllMinDigits(Boolean)).toBe(0);
    expect(sumAllMinDigits("string")).toBe(0);
    expect(sumAllMinDigits(undefined)).toBe(0);
    expect(sumAllMinDigits(() => {})).toBe(0);
  });
  test("should return 0 if numberList is empty", () => {
    expect(sumAllMinDigits([])).toBe(0);
  });
  test("should return sum of min digit of number in array", () => {
    expect(sumAllMinDigits([23])).toBe(2);
    expect(sumAllMinDigits([123])).toBe(1);
    expect(sumAllMinDigits([123, 532])).toBe(3);
    expect(sumAllMinDigits([123, 532, 111, 434])).toBe(7);
    expect(sumAllMinDigits([123, 532, 873, 987])).toBe(13);
  });
});
