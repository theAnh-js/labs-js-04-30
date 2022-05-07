/**ARRAY-CHECK-11: Kiểm tra mang có đối xứng không
Viết hàm isSymmetricList(numberList) để kiểm tra mảng có tính chất đổi xứng không?
Mảng đối xứng là mảng đọc từ trái qua phải giống như đọc từ phải sang trái.
Mảng đối xứng phải có ít nhất một phần tử.
 */
/**isSymmetricList([]); // false
isSymmetricList([1]); // true
isSymmetricList([1, 2, 2, 1]); // true
isSymmetricList([1, 2, 3]); // false */
import { isSymmetricList, isSymmetricListV2 } from "./arr-11";
describe("isSymmetricList(numberList)", () => {
  test("should return false if numberList is empty", () => {
    expect(isSymmetricList([])).toBe(false);
  });
  test("should return false if numberList is not an array", () => {
    expect(isSymmetricList(NaN)).toBe(false);
    expect(isSymmetricList(null)).toBe(false);
    expect(isSymmetricList(1234)).toBe(false);
    expect(isSymmetricList("easy")).toBe(false);
    expect(isSymmetricList(undefined)).toBe(false);
    expect(isSymmetricList({ number: 222 })).toBe(false);
  });
  test("should return false if the list is not a symmetric list", () => {
    expect(isSymmetricList([1, 2, 3, 2, 3])).toBe(false);
    expect(isSymmetricList([0, 3, 4, 2, 2])).toBe(false);
    expect(isSymmetricList([0, 3])).toBe(false);
    expect(isSymmetricList([3, 4, 4, 4, 3, 2])).toBe(false);
    expect(isSymmetricList([333, 444, 333, 444])).toBe(false);
  });
  test("should return true if the list is symmetric", () => {
    expect(isSymmetricList([0])).toBe(true);
    expect(isSymmetricList([1])).toBe(true);
    expect(isSymmetricList([1, 2, 3, 2, 1])).toBe(true);
    expect(isSymmetricList([5, 5, 5, 5, 5, 5])).toBe(true);
    expect(isSymmetricList([11, 22, 22, 11])).toBe(true);
  });
});

describe("isSymmetricListV2(numberList)", () => {
  test("should return false if numberList is empty", () => {
    expect(isSymmetricListV2([])).toBe(false);
  });
  test("should return false if numberList is not an array", () => {
    expect(isSymmetricListV2(NaN)).toBe(false);
    expect(isSymmetricListV2(null)).toBe(false);
    expect(isSymmetricListV2(1234)).toBe(false);
    expect(isSymmetricListV2("easy")).toBe(false);
    expect(isSymmetricListV2(undefined)).toBe(false);
    expect(isSymmetricListV2({ number: 222 })).toBe(false);
  });
  test("should return false if the list is not a symmetric list", () => {
    expect(isSymmetricListV2([1, 2, 3, 2, 3])).toBe(false);
    expect(isSymmetricListV2([0, 3, 4, 2, 2])).toBe(false);
    expect(isSymmetricListV2([0, 3])).toBe(false);
    expect(isSymmetricListV2([3, 4, 4, 4, 3, 2])).toBe(false);
    expect(isSymmetricListV2([333, 444, 333, 444])).toBe(false);
  });

  test("should return true if the list is symmetric", () => {
    expect(isSymmetricListV2([0])).toBe(true);
    expect(isSymmetricListV2([1])).toBe(true);
    expect(isSymmetricListV2([1, 2, 3, 2, 1])).toBe(true);
    expect(isSymmetricListV2([5, 5, 5, 5, 5, 5])).toBe(true);
    expect(isSymmetricListV2([11, 22, 22, 11])).toBe(true);
  });
});
