/**ARRAY-FILTER-05: Tìm tất cả các số bằng với số dương chẳn đầu tiên trong mảng
Viết hàm findAllNumbers(numberList) để tìm ra tất cả các số bằng với số dương chẳn đầu tiên trong
mảng.
Trường hợp mảng không có số dương chẳn thì trả về mảng rỗng.
Mảng kết quả không bao gồm số dương chẵn đầu tiên. */
/**findAllNumbers([1, 3, 5]); // []
findAllNumbers([1, 2, 5]); 
// [] bởi vì có duy một số dương chẳn đầu tiên, mà số này không bao gồm
trong mảng kết quả
findAllNumbers([1, 4, 5, -6, 4, 5, 4]); 
// [4, 4] vì có 3 số 4, bỏ đi một số đầu tiên thì còn lại 2 sô */
import { findAllNumbers } from "./arr-filter-5";
describe("findAllNumbers(numberList)", () => {
  test("should return empty array if numberList is not an array", () => {
    expect(findAllNumbers(3)).toEqual([]);
    expect(findAllNumbers({})).toEqual([]);
    expect(findAllNumbers(null)).toEqual([]);
    expect(findAllNumbers(Boolean)).toEqual([]);
    expect(findAllNumbers("string")).toEqual([]);
    expect(findAllNumbers(undefined)).toEqual([]);
  });
  test("should return empty array if numberList is empty or only one element", () => {
    expect(findAllNumbers([])).toEqual([]);
    expect(findAllNumbers([7])).toEqual([]);
    expect(findAllNumbers([3])).toEqual([]);
  });
  test("should return an empty array if number list has no even numbers or only one even number", () => {
    expect(findAllNumbers([4, 3, 7, 11])).toEqual([]);
    expect(findAllNumbers([3, 13, 7, 11])).toEqual([]);
    expect(findAllNumbers([0, 1, 2, 3, 4, 5])).toEqual([]);
    expect(findAllNumbers([8, 33, 23, 55, 67])).toEqual([]);
    expect(findAllNumbers([9, 12, 15, 3, 7, 11])).toEqual([]);
    expect(findAllNumbers([3, 13, 4, 7, 6, 8, 11])).toEqual([]);
  });
  test("should return an array includes even numbers except first number", () => {
    expect(findAllNumbers([5, 4, 3, 2, 2, 46, 4])).toEqual([4]);
    expect(findAllNumbers([5, 10, 3, 10, 10, 41])).toEqual([10, 10]);
    expect(findAllNumbers([6, 6, 8, 3, 2, 6, 5, 7, 3])).toEqual([6, 6]);
    expect(findAllNumbers([5, 8, 3, 2, 8, 2, 2, 46, 8, 4])).toEqual([8, 8]);
  });
});
