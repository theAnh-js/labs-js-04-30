// Bài 79: Hãy đếm số lượng chữ số của số nguyên dương n
/**
 * n <= 0 ---> -1
 * n > 0 ---- acount of number of n, 
 *            if first number = 0 ---> delete
 */

import { acountNumber } from "./lab79-chapter2";

describe('acount number character of n', () => {
    test('should return -1 if n is not integer and n <= 0', () => {
        expect(acountNumber(0)).toBe(-1);
        expect(acountNumber(5.5)).toBe(-1);
        expect(acountNumber(5.5)).toBe(-1);
        expect(acountNumber(-5.5)).toBe(-1);
        expect(acountNumber(-1)).toBe(-1);
    });

    // test('should delete 0 when n begin by 0', () => {
    //     expect(acountNumber(0123)).toBe(3);
    //     // expect(acountNumber(0001)).toBe(1);
    //     // expect(acountNumber(0100000)).toBe(6);
    //     // expect(acountNumber(0100000)).toBe(6);
    // });

    test('should return acount number of n', () => {
        expect(acountNumber(5345)).toBe(4);
        expect(acountNumber(5)).toBe(1);
        expect(acountNumber(1)).toBe(1);
        expect(acountNumber(5345333)).toBe(7);
    });
});