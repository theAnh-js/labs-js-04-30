/**RRAY-CHECK-01: Kiểm tra có số chẵn lớn hơn n trong mảng không
Viết hàm hasEvenNumberGreaterThanN(numberList, n) để kiểm tra trong mảng số numberList truyền
vào có số chẵn mà lớn hơn n hay không?
hasEvenNumberGreaterThanN([2, 3, 4], 5); // false
hasEvenNumberGreaterThanN([2, 3, 4, 6], 5); // true
*/
import {
  hasEvenNumberGreaterThanN,
  hasEvenNumberGreaterThanNV2,
  hasEvenNumberGreaterThanNV3,
  hasEvenNumberGreaterThanNV4,
} from "./arr-01";
describe("hasEvenNumberGreaterThanN(numberList, n)", () => {
  test("should return false if numberList is empty", () => {
    expect(hasEvenNumberGreaterThanN([], 3)).toBe(false);
    expect(hasEvenNumberGreaterThanN([" "], 3)).toBe(false);
  });
  test("should return false if type of n is not number", () => {
    expect(hasEvenNumberGreaterThanN([1, 2, 4], "")).toBe(false);
    expect(hasEvenNumberGreaterThanN([1, 2], " ")).toBe(false);
    expect(hasEvenNumberGreaterThanN([4, 6, 7], " ")).toBe(false);
  });
  test("should retun false if has no a even number in list", () => {
    expect(hasEvenNumberGreaterThanN([1, 3, 5], 2)).toBe(false);
    expect(hasEvenNumberGreaterThanN([1, 3, 5], 4)).toBe(false);
    expect(hasEvenNumberGreaterThanN([3, 5, 77, 101], 1)).toBe(false);
    expect(hasEvenNumberGreaterThanN([45, 99, 111, 455], 40)).toBe(false);
  });
  test("should return false when has no any even number that is greater than n", () => {
    expect(hasEvenNumberGreaterThanN([1, 2, 3, 4], 6)).toBe(false);
    expect(hasEvenNumberGreaterThanN([0, 1], 3)).toBe(false);
    expect(hasEvenNumberGreaterThanN([1, 2, 3, 4], 5)).toBe(false);
    expect(hasEvenNumberGreaterThanN([3, 4, 66, 99], 100)).toBe(false);
    expect(hasEvenNumberGreaterThanN([1, 2, 3, 4, 56, 43, 66], 67)).toBe(false);
  });

  test("should return true if has even number of list that is greater than n", () => {
    expect(hasEvenNumberGreaterThanN([1, 2, 3, 4], 3)).toBe(true);
    expect(hasEvenNumberGreaterThanN([1, 2, 3], 0)).toBe(true);
    expect(hasEvenNumberGreaterThanN([4, 6, 5, 2, 9], 5)).toBe(true);
    expect(hasEvenNumberGreaterThanN([21, 22, 24, 36], 30)).toBe(true);
    expect(hasEvenNumberGreaterThanN([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)).toBe(
      true
    );
    expect(hasEvenNumberGreaterThanN([1, 2, 3, 4, 445, 666, 777], 665)).toBe(
      true
    );
  });
});

describe("hasEvenNumberGreaterThanN(numberList, n)", () => {
  test("should return false if numberList is empty", () => {
    expect(hasEvenNumberGreaterThanNV2([], 3)).toBe(false);
    expect(hasEvenNumberGreaterThanNV2([" "], 3)).toBe(false);
  });
  test("should return false if type of n is not number", () => {
    expect(hasEvenNumberGreaterThanNV2([1, 2, 4], "")).toBe(false);
    expect(hasEvenNumberGreaterThanNV2([1, 2], " ")).toBe(false);
    expect(hasEvenNumberGreaterThanNV2([4, 6, 7], " ")).toBe(false);
  });
  test("should retun false if has no a even number in list", () => {
    expect(hasEvenNumberGreaterThanNV2([1, 3, 5], 2)).toBe(false);
    expect(hasEvenNumberGreaterThanNV2([1, 3, 5], 4)).toBe(false);
    expect(hasEvenNumberGreaterThanNV2([3, 5, 77, 101], 1)).toBe(false);
    expect(hasEvenNumberGreaterThanNV2([45, 99, 111, 455], 40)).toBe(false);
  });
  test("should return false when has no any even number that is greater than n", () => {
    expect(hasEvenNumberGreaterThanNV2([1, 2, 3, 4], 6)).toBe(false);
    expect(hasEvenNumberGreaterThanNV2([0, 1], 3)).toBe(false);
    expect(hasEvenNumberGreaterThanNV2([1, 2, 3, 4], 5)).toBe(false);
    expect(hasEvenNumberGreaterThanNV2([3, 4, 66, 99], 100)).toBe(false);
    expect(hasEvenNumberGreaterThanNV2([1, 2, 3, 4, 56, 43, 66], 67)).toBe(
      false
    );
  });

  test("should return true if has even number of list that is greater than n", () => {
    expect(hasEvenNumberGreaterThanNV2([1, 2, 3, 4], 3)).toBe(true);
    expect(hasEvenNumberGreaterThanNV2([1, 2, 3], 0)).toBe(true);
    expect(hasEvenNumberGreaterThanNV2([4, 6, 5, 2, 9], 5)).toBe(true);
    expect(hasEvenNumberGreaterThanNV2([21, 22, 24, 36], 30)).toBe(true);
    expect(hasEvenNumberGreaterThanNV2([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)).toBe(
      true
    );
    expect(hasEvenNumberGreaterThanNV2([1, 2, 3, 4, 445, 666, 777], 665)).toBe(
      true
    );
  });
});

describe("hasEvenNumberGreaterThanN(numberList, n)", () => {
  test("should return false if numberList is empty", () => {
    expect(hasEvenNumberGreaterThanNV3([], 3)).toBe(false);
    expect(hasEvenNumberGreaterThanNV3([" "], 3)).toBe(false);
  });
  test("should return false if type of n is not number", () => {
    expect(hasEvenNumberGreaterThanNV3([1, 2, 4], "")).toBe(false);
    expect(hasEvenNumberGreaterThanNV3([1, 2], " ")).toBe(false);
    expect(hasEvenNumberGreaterThanNV3([4, 6, 7], " ")).toBe(false);
  });
  test("should retun false if has no a even number in list", () => {
    expect(hasEvenNumberGreaterThanNV3([1, 3, 5], 2)).toBe(false);
    expect(hasEvenNumberGreaterThanNV3([1, 3, 5], 4)).toBe(false);
    expect(hasEvenNumberGreaterThanNV3([3, 5, 77, 101], 1)).toBe(false);
    expect(hasEvenNumberGreaterThanNV3([45, 99, 111, 455], 40)).toBe(false);
  });
  test("should return false when has no any even number that is greater than n", () => {
    expect(hasEvenNumberGreaterThanNV3([1, 2, 3, 4], 6)).toBe(false);
    expect(hasEvenNumberGreaterThanNV3([0, 1], 3)).toBe(false);
    expect(hasEvenNumberGreaterThanNV3([1, 2, 3, 4], 5)).toBe(false);
    expect(hasEvenNumberGreaterThanNV3([3, 4, 66, 99], 100)).toBe(false);
    expect(hasEvenNumberGreaterThanNV3([1, 2, 3, 4, 56, 43, 66], 67)).toBe(
      false
    );
  });

  test("should return true if has even number of list that is greater than n", () => {
    expect(hasEvenNumberGreaterThanNV3([1, 2, 3, 4], 3)).toBe(true);
    expect(hasEvenNumberGreaterThanNV3([1, 2, 3], 0)).toBe(true);
    expect(hasEvenNumberGreaterThanNV3([4, 6, 5, 2, 9], 5)).toBe(true);
    expect(hasEvenNumberGreaterThanNV3([21, 22, 24, 36], 30)).toBe(true);
    expect(hasEvenNumberGreaterThanNV3([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)).toBe(
      true
    );
    expect(hasEvenNumberGreaterThanNV3([1, 2, 3, 4, 445, 666, 777], 665)).toBe(
      true
    );
  });
});

describe("hasEvenNumberGreaterThanN(numberList, n)", () => {
  test("should return false if numberList is empty", () => {
    expect(hasEvenNumberGreaterThanNV4([], 3)).toBe(false);
    expect(hasEvenNumberGreaterThanNV4([" "], 3)).toBe(false);
  });
  test("should return false if type of n is not number", () => {
    expect(hasEvenNumberGreaterThanNV4([1, 2, 4], "")).toBe(false);
    expect(hasEvenNumberGreaterThanNV4([1, 2], " ")).toBe(false);
    expect(hasEvenNumberGreaterThanNV4([4, 6, 7], " ")).toBe(false);
  });
  test("should retun false if has no a even number in list", () => {
    expect(hasEvenNumberGreaterThanNV4([1, 3, 5], 2)).toBe(false);
    expect(hasEvenNumberGreaterThanNV4([1, 3, 5], 4)).toBe(false);
    expect(hasEvenNumberGreaterThanNV4([3, 5, 77, 101], 1)).toBe(false);
    expect(hasEvenNumberGreaterThanNV4([45, 99, 111, 455], 40)).toBe(false);
  });
  test("should return false when has no any even number that is greater than n", () => {
    expect(hasEvenNumberGreaterThanNV4([1, 2, 3, 4], 6)).toBe(false);
    expect(hasEvenNumberGreaterThanNV4([0, 1], 3)).toBe(false);
    expect(hasEvenNumberGreaterThanNV4([1, 2, 3, 4], 5)).toBe(false);
    expect(hasEvenNumberGreaterThanNV4([3, 4, 66, 99], 100)).toBe(false);
    expect(hasEvenNumberGreaterThanNV4([1, 2, 3, 4, 56, 43, 66], 67)).toBe(
      false
    );
  });

  test("should return true if has even number of list that is greater than n", () => {
    expect(hasEvenNumberGreaterThanNV4([1, 2, 3, 4], 3)).toBe(true);
    expect(hasEvenNumberGreaterThanNV4([1, 2, 3], 0)).toBe(true);
    expect(hasEvenNumberGreaterThanNV4([4, 6, 5, 2, 9], 5)).toBe(true);
    expect(hasEvenNumberGreaterThanNV4([21, 22, 24, 36], 30)).toBe(true);
    expect(hasEvenNumberGreaterThanNV4([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)).toBe(
      true
    );
    expect(hasEvenNumberGreaterThanNV4([1, 2, 3, 4, 445, 666, 777], 665)).toBe(
      true
    );
  });
});
