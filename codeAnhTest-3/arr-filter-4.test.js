/**ARRAY-FILTER-04: Dãy số nguyên tố nhỏ hơn n
Viết hàm generatePrimeNumbers(n) để tạo ra mảng các số nguyên tố nhỏ hơn n (0 < n < 1000)
 generatePrimeNumbers(10); // [2, 3, 5, 7]
generatePrimeNumbers(20); // [2, 3, 5, 7, 11, 13, 17, 19*/

import { generatePrimeNumbers } from "./arr-filter-4";
describe("generatePrimeNumbers(n)", () => {
  test("should return an empty array if n is not a number or a NaN", () => {
    expect(generatePrimeNumbers("hu")).toEqual([]);
    expect(generatePrimeNumbers({})).toEqual([]);
    expect(generatePrimeNumbers(NaN)).toEqual([]);
    expect(generatePrimeNumbers(undefined)).toEqual([]);
    expect(generatePrimeNumbers(null)).toEqual([]);
  });
  test("should return an empty array if n is not an integer", () => {
    expect(generatePrimeNumbers(4.3)).toEqual([]);
    expect(generatePrimeNumbers(7.4)).toEqual([]);
  });
  test("should return an empty array if n greater than 1000 or less than 0", () => {
    expect(generatePrimeNumbers(1000)).toEqual([]);
    expect(generatePrimeNumbers(0)).toEqual([]);
    expect(generatePrimeNumbers(1300)).toEqual([]);
    expect(generatePrimeNumbers(-3)).toEqual([]);
  });

  test("should return an array prime numbers that less than n", () => {
    expect(generatePrimeNumbers(10)).toEqual([2, 3, 5, 7]);
    expect(generatePrimeNumbers(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  });
});
