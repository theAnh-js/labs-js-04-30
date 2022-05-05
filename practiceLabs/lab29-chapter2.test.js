//Bài 29: Tìm ước số lẻ lớn nhất của số nguyên dương n.
// Ví dụ n = 100 ước lẻ lớn nhất là 25

import{findMaxOddDivisor, findMaxOddDivisorV2}from './lab29-chapter2'
describe('find a max odd divisor of n', () => {
    test('should return -1 when n is not integer and n <= 0', () => {
        expect(findMaxOddDivisor(0)).toBe(-1);
        expect(findMaxOddDivisor(-3)).toBe(-1);
        expect(findMaxOddDivisor(3.5)).toBe(-1);
        expect(findMaxOddDivisor(-3.5)).toBe(-1);
    });
    test('should return a max odd divisor of n', () => {
        expect(findMaxOddDivisor(1)).toBe(1);
        expect(findMaxOddDivisor(10)).toBe(5);
        expect(findMaxOddDivisor(15)).toBe(15);
        expect(findMaxOddDivisor(21)).toBe(21);
        expect(findMaxOddDivisor(50)).toBe(25);
        expect(findMaxOddDivisor(100)).toBe(25);
    });
});

describe('find a max odd divisor of n', () => {
    test('should return -1 when n is not integer and n <= 0', () => {
        expect(findMaxOddDivisorV2(0)).toBe(-1);
        expect(findMaxOddDivisorV2(-3)).toBe(-1);
        expect(findMaxOddDivisorV2(3.5)).toBe(-1);
        expect(findMaxOddDivisorV2(-3.5)).toBe(-1);
    });
    test('should return a max odd divisor of n', () => {
        expect(findMaxOddDivisorV2(1)).toBe(1);
        expect(findMaxOddDivisorV2(10)).toBe(5);
        expect(findMaxOddDivisorV2(15)).toBe(15);
        expect(findMaxOddDivisorV2(21)).toBe(21);
        expect(findMaxOddDivisorV2(50)).toBe(25);
        expect(findMaxOddDivisorV2(100)).toBe(25);
    });
});