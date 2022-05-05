

// Bài 23: Đếm số lượng “ước số” của số nguyên dương n

import {acountDivisors, acountDivisorsV2} from './lab23-chapter1'

describe('acount of divisors of n', () => {
    test('should return -1 when n is not integer and less then or equal to 0', () => {
        expect(acountDivisors(-4)).toBe(-1);
        expect(acountDivisors(0)).toBe(-1);
        expect(acountDivisors(10.7)).toBe(-1);
    });
    test('should return acount of divisors of n when n is ok', () => {
        expect(acountDivisors(4)).toBe(3);
        expect(acountDivisors(6)).toBe(4);
        expect(acountDivisors(10)).toBe(4);
    });
});

describe('acount of divisors of n', () => {
    test('should return -1 when n is not integer and less then or equal to 0', () => {
        expect(acountDivisorsV2(-4)).toBe(-1);
        expect(acountDivisorsV2(0)).toBe(-1);
        expect(acountDivisorsV2(10.7)).toBe(-1);
    });
    test('should return acount of divisors of n when n is ok', () => {
        expect(acountDivisorsV2(4)).toBe(3);
        expect(acountDivisorsV2(6)).toBe(4);
        expect(acountDivisorsV2(10)).toBe(4);
    });
});