/**NUMBER-08: Kiểm tra số có tổng chữ số chia hết cho 10
Viết hàm isDivisibleBy10(n) để kiểm tra n (0 < n < 1000000) có tổng chữ số chia hết cho 10 hay không?
Ví dụ:
isDivisibleBy10(10) --> false
isDivisibleBy10(1234) --> true vì 1 + 2 + 3 + 4 = 10 chia hết cho 10
isDivisibleBy10(123455) --> true vì 1 + 2 + 3 + 4 + 5 + 5 = 20 chia hết cho 10 */

import { isDivisibleBy10, isDivisibleBy10V2 } from './number-08';

describe('isDivisibleBy10(n)', () => {
    test('should return false if n <= 0', () => {
        expect(isDivisibleBy10(0)).toBe(false);
        expect(isDivisibleBy10(-1)).toBe(false);
        expect(isDivisibleBy10(-3)).toBe(false);
    });
    test('should return false if n >= 1000000', () => {
        expect(isDivisibleBy10(1000000)).toBe(false);
        expect(isDivisibleBy10(2000000)).toBe(false);
    });
    test('should return false if sum of digit of n is not divisible by 10', () => {
        expect(isDivisibleBy10(123)).toBe(false);
        expect(isDivisibleBy10(1253)).toBe(false);
        expect(isDivisibleBy10(555)).toBe(false);
        expect(isDivisibleBy10(649)).toBe(false);
    });
    test('should return true if sum of digit of n is divisible by 10', () => {
        expect(isDivisibleBy10(1234)).toBe(true);
        expect(isDivisibleBy10(5555)).toBe(true);
        expect(isDivisibleBy10(123455)).toBe(true);
        expect(isDivisibleBy10(44444)).toBe(true);
        expect(isDivisibleBy10(733773)).toBe(true);
        expect(isDivisibleBy10(730073)).toBe(true);
        expect(isDivisibleBy10(730000)).toBe(true);
    });
});

describe('isDivisibleBy10V2(n)', () => {
    test('should return false if n <= 0', () => {
        expect(isDivisibleBy10V2(0)).toBe(false);
        expect(isDivisibleBy10V2(-1)).toBe(false);
        expect(isDivisibleBy10V2(-3)).toBe(false);
    });
    test('should return false if n >= 1000000', () => {
        expect(isDivisibleBy10V2(1000000)).toBe(false);
        expect(isDivisibleBy10V2(2000000)).toBe(false);
    });
    test('should return false if sum of digit of n is not divisible by 10', () => {
        expect(isDivisibleBy10V2(123)).toBe(false);
        expect(isDivisibleBy10V2(1253)).toBe(false);
        expect(isDivisibleBy10V2(555)).toBe(false);
        expect(isDivisibleBy10V2(649)).toBe(false);
    });
    test('should return true if sum of digit of n is divisible by 10', () => {
        expect(isDivisibleBy10V2(1234)).toBe(true);
        expect(isDivisibleBy10V2(5555)).toBe(true);
        expect(isDivisibleBy10V2(123455)).toBe(true);
        expect(isDivisibleBy10V2(44444)).toBe(true);
        expect(isDivisibleBy10V2(733773)).toBe(true);
        expect(isDivisibleBy10V2(730073)).toBe(true);
        expect(isDivisibleBy10V2(730000)).toBe(true);
    });
});