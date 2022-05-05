

//Bài 24: Liệt kê tất cả các “ước số lẻ” của số nguyên dương n


import { oddDivisorList } from "./lab24-chapter1";

describe('show list of odd divisors', () => {
    test('should return -1 when n is not integer and less than or equal to 0', () => {
        expect(oddDivisorList(0)).toBe(-1);
        expect(oddDivisorList(-4)).toBe(-1);
        expect(oddDivisorList(-3.4)).toBe(-1);
    });
    test('should return a list of odd divisors of n', () => {
        expect(oddDivisorList(2)).toEqual([1]);
        expect(oddDivisorList(3)).toEqual([1,3]);
        expect(oddDivisorList(4)).toEqual([1]);
        expect(oddDivisorList(6)).toEqual([1, 3]);
        expect(oddDivisorList(15)).toEqual([1, 3, 5, 15]);
    });
});