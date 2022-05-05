//Cho số nguyên dương n. Tính tổng các ước số nhỏ hơn chính nó

import {sumDivisors, sumDivisorsV2} from './lab28-chapter2';
describe('sum of divisors of n and divisors less than n',() => {
    test('should return -1 when n is not integer and divisors less thann or equal to 0', () => {
        expect(sumDivisors(0)).toBe(-1);
        expect(sumDivisors(-1)).toBe(-1);
        expect(sumDivisors(4.3)).toBe(-1);
    });
    test('should return -1 when n is equal to 1', () => {
        expect(sumDivisors(1)).toBe(-1);
    });
    test('should return sum of divisors of n and divisors less than n', () => {
        expect(sumDivisors(4)).toBe(1+2);
        expect(sumDivisors(10)).toBe(1+2+5);
        expect(sumDivisors(20)).toBe(1+2+4+5+10);
    });
});

describe('sum of divisors of n and divisors less than n',() => {
    test('should return -1 when n is not integer and divisors less thann or equal to 0', () => {
        expect(sumDivisorsV2(0)).toBe(-1);
        expect(sumDivisorsV2(-1)).toBe(-1);
        expect(sumDivisorsV2(4.3)).toBe(-1);
    });
    test('should return -1 when n is equal to 1', () => {
        expect(sumDivisorsV2(1)).toBe(-1);
    });
    test('should return sum of divisors of n and divisors less than n', () => {
        expect(sumDivisorsV2(4)).toBe(1+2);
        expect(sumDivisorsV2(10)).toBe(1+2+5);
        expect(sumDivisorsV2(20)).toBe(1+2+4+5+10);
    });
});