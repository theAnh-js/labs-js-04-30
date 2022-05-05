//Bài 26: Tính tích tất cả các “ước số lẻ” của số nguyên dương n
import {multiplyOddDivisorsV1, multiplyOddDivisorsV2, multiplyOddDivisorsV3, multiplyOddDivisorsV4}from './lab26-chapter2'
describe('multiply odd divisors of n', () => {
    test('should return -1 when n <= 0', () => {
        expect(multiplyOddDivisorsV1(0)).toBe(-1);
        expect(multiplyOddDivisorsV1(-1)).toBe(-1);
        expect(multiplyOddDivisorsV1(-4)).toBe(-1);
    });
    test('should return -1 when n is not integer', () => {
        expect(multiplyOddDivisorsV1(3.5)).toBe(-1);
        expect(multiplyOddDivisorsV1(-1.4)).toBe(-1);
    });
    test('should return multiplication of odd divisors of n', () => {
        expect(multiplyOddDivisorsV1(4)).toBe(1);
        expect(multiplyOddDivisorsV1(10)).toBe(1*5);
        expect(multiplyOddDivisorsV1(15)).toBe(1*3*5*15);
        expect(multiplyOddDivisorsV1(21)).toBe(1*3*7*21);
    });
});

describe('multiply odd divisors of n', () => {
    test('should return -1 when n <= 0', () => {
        expect(multiplyOddDivisorsV2(0)).toBe(-1);
        expect(multiplyOddDivisorsV2(-1)).toBe(-1);
        expect(multiplyOddDivisorsV2(-4)).toBe(-1);
    });
    test('should return -1 when n is not integer', () => {
        expect(multiplyOddDivisorsV2(3.5)).toBe(-1);
        expect(multiplyOddDivisorsV2(-1.4)).toBe(-1);
    });
    test('should return multiplication of odd divisors of n', () => {
        expect(multiplyOddDivisorsV2(4)).toBe(1);
        expect(multiplyOddDivisorsV2(10)).toBe(1*5);
        expect(multiplyOddDivisorsV2(15)).toBe(1*3*5*15);
        expect(multiplyOddDivisorsV2(21)).toBe(1*3*7*21);
    });
});

describe('multiply odd divisors of n', () => {
    test('should return -1 when n <= 0', () => {
        expect(multiplyOddDivisorsV3(0)).toBe(-1);
        expect(multiplyOddDivisorsV3(-1)).toBe(-1);
        expect(multiplyOddDivisorsV3(-4)).toBe(-1);
    });
    test('should return -1 when n is not integer', () => {
        expect(multiplyOddDivisorsV3(3.5)).toBe(-1);
        expect(multiplyOddDivisorsV3(-1.4)).toBe(-1);
    });
    test('should return multiplication of odd divisors of n', () => {
        expect(multiplyOddDivisorsV3(4)).toBe(1);
        expect(multiplyOddDivisorsV3(10)).toBe(1*5);
        expect(multiplyOddDivisorsV3(15)).toBe(1*3*5*15);
        expect(multiplyOddDivisorsV3(21)).toBe(1*3*7*21);
    });
});

describe('multiply odd divisors of n', () => {
    test('should return -1 when n <= 0', () => {
        expect(multiplyOddDivisorsV4(0)).toBe(-1);
        expect(multiplyOddDivisorsV4(-1)).toBe(-1);
        expect(multiplyOddDivisorsV4(-4)).toBe(-1);
    });
    test('should return -1 when n is not integer', () => {
        expect(multiplyOddDivisorsV4(3.5)).toBe(-1);
        expect(multiplyOddDivisorsV4(-1.4)).toBe(-1);
    });
    test('should return multiplication of odd divisors of n', () => {
        expect(multiplyOddDivisorsV4(4)).toBe(1);
        expect(multiplyOddDivisorsV4(10)).toBe(1*5);
        expect(multiplyOddDivisorsV4(15)).toBe(1*3*5*15);
        expect(multiplyOddDivisorsV4(21)).toBe(1*3*7*21);
    });
});