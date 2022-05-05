//Bài 27: Đếm số lượng “ước số chẵn” của số nguyên dương n

import {acountEvenDivisorsV1}from'./lab27-chapter2'
describe('acount of even divisors', () => {
    test('should return -1 when n <= 0 and is not integer', () => {
        expect(acountEvenDivisorsV1(0)).toBe(-1);
        expect(acountEvenDivisorsV1(-2)).toBe(-1);
        expect(acountEvenDivisorsV1(3.5)).toBe(-1);
    });
    test('should return acount of even divisors', () => {
        expect(acountEvenDivisorsV1(4)).toBe(2);
        expect(acountEvenDivisorsV1(10)).toBe(2);
        expect(acountEvenDivisorsV1(15)).toBe(0);
    });
});