//Tính tổng tất cả các “ ước số” của số nguyên dương n
/**
 * n <= 0 --> -1;
 * n is not integer --> -1;
 * n > 0 --> sum of divisor of n
 */

import {sumOfDivisor, sumOfDivisorV2} from './lab21-chapter1'
describe('sum of divisor of n', () => {
    test('n should be a number that is integer and greater than 0', () => {
        expect(sumOfDivisor(0)).toBe(-1);
        expect(sumOfDivisor(-1)).toBe(-1);
        expect(sumOfDivisor(-2.1)).toBe(-1);
    });
    test('should return a sum of divisors of n', () => {
        expect(sumOfDivisor(4)).toBe(7);
        expect(sumOfDivisor(6)).toBe(12);
        expect(sumOfDivisor(2)).toBe(3);
    })
});


describe('sum of divisor of n', () => {
    test('n should be a number that is integer and greater than 0', () => {
        expect(sumOfDivisorV2(0)).toBe(-1);
        expect(sumOfDivisorV2(-1)).toBe(-1);
        expect(sumOfDivisorV2(-2.1)).toBe(-1);
    });
    test('should return a sum of divisors of n', () => {
        expect(sumOfDivisorV2(4)).toBe(7);
        expect(sumOfDivisorV2(6)).toBe(12);
        expect(sumOfDivisorV2(2)).toBe(3);
    })
});