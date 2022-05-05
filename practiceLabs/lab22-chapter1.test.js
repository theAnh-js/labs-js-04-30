//Bài 22:Tính tích tất cả các “ước số” của số nguyên dương n

import {multiplyDivisor} from './lab22-chapter1'
describe('multiplication of divisors of n', () => {
    test('should return -1 if n is not a integer and less than 0', () => {
        expect(multiplyDivisor(0)).toBe(-1);
        expect(multiplyDivisor(-3)).toBe(-1);
        expect(multiplyDivisor(-4.5)).toBe(-1);
    });
    test('should return multiplication of divisors of n', () => {
        expect(multiplyDivisor(6)).toBe(1*2*3*6);
        expect(multiplyDivisor(7)).toBe(1*7);
        expect(multiplyDivisor(10)).toBe(1*2*5*10);
    })
});