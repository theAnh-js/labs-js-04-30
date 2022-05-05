/**
 * NUMBER-05: Kiểm tra số chính phương
Viết hàm isPerfectSquare(n) để kiểm tra n có phải là số chính phương không?
0 < n < 100000
Số chính phương là số có căn bậc 2 của nó là một số tự nhiên.
Trả về true nếu là số chính phương, ngược lại trả về false.
Ví dụ: 4, 9, 25, 36 là các số chính phương.
*/
import {isPerfectSquare} from './number-05';

describe('isPerfectSquare(n)', () => {
    test('should return false if n <= 0', () => {
        expect(isPerfectSquare(0)).toBe(false);
        expect(isPerfectSquare(-3)).toBe(false);
    });
    test('should return false if n=> 100000', () => {
        expect(isPerfectSquare(100000)).toBe(false);
        expect(isPerfectSquare(110000)).toBe(false);
    });
    test('should return false if n is not a perfect square number', () => {
        expect(isPerfectSquare(2)).toBe(false);
        expect(isPerfectSquare(5)).toBe(false);
        expect(isPerfectSquare(10)).toBe(false);
    });
    test('should return true if n is a square number', () => {
        expect(isPerfectSquare(1)).toBe(true);
        expect(isPerfectSquare(4)).toBe(true);
        expect(isPerfectSquare(9)).toBe(true);
        expect(isPerfectSquare(16)).toBe(true);
    });
});