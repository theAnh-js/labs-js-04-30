// Bài 20: Liệt kê tất cả các “ước số” của số nguyên dương n
/**
 * n <= 0 --> return -1;
 * n in not integer ---> return -1;
 * n > 0 ---> return list divisor of n in a Array
 */

import{listDivisorOfIntegerNumber, listDivisorOfIntegerNumberV2} from './lab20-chapter1'

describe('listDivisorOfIntegerNumber', () => {
    test('should return -1 if n is less than or equal to 0', () => {
        expect(listDivisorOfIntegerNumber(0)).toBe(-1);
        expect(listDivisorOfIntegerNumber(-4)).toBe(-1);
        expect(listDivisorOfIntegerNumber(-6)).toBe(-1);
    })
    test('should return -1 if n is not integer', () => {
        expect(listDivisorOfIntegerNumber(3.5)).toBe(-1);
        expect(listDivisorOfIntegerNumber(4.1)).toBe(-1);
    })
    test('should  return list of divisor of n', () => {
        expect(listDivisorOfIntegerNumber(6)).toEqual([1,2,3,6]);
        expect(listDivisorOfIntegerNumber(7)).toEqual([1,7]);
        expect(listDivisorOfIntegerNumber(4)).toEqual([1,2,4]);

    })
});
describe('listDivisorOfIntegerNumberV2', () => {
    test('should return -1 if n is less than or equal to 0', () => {
        expect(listDivisorOfIntegerNumberV2(0)).toBe(-1);
        expect(listDivisorOfIntegerNumberV2(-4)).toBe(-1);
        expect(listDivisorOfIntegerNumberV2(-6)).toBe(-1);
    })
    test('should return -1 if n is not integer', () => {
        expect(listDivisorOfIntegerNumberV2(3.5)).toBe(-1);
        expect(listDivisorOfIntegerNumberV2(4.1)).toBe(-1);
    })
    test('should return list of divisor of n', () => {
        expect(listDivisorOfIntegerNumberV2(6)).toEqual([1,2,3,6]);
        expect(listDivisorOfIntegerNumberV2(7)).toEqual([1,7]);
        expect(listDivisorOfIntegerNumberV2(4)).toEqual([1,2,4]);
    })
});