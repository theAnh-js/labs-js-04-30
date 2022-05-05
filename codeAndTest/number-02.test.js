/**
 * NUMBER-02: Kiểm tra số giảm dần
Viết hàm isDecreasingNumber(n) để kiểm tra n có phải là số giảm dần hay không?
0 < n < 1000000
Số giảm dần có ít nhất 2 chữ số
Chữ số bên phải luôn nhỏ hơn chữ số bên trái
Trả về true nếu là số giảm dần, ngược lại trả về false.
Ví dụ:
isDecreasingNumber(11) --> false
isDecreasingNumber(321) --> true
isDecreasingNumber(12321) --> false

 */

import{isDecreasingNumber} from './number-02'
describe('check if n is a decreasing number', () => {
    test('should return false if n < 10', () => {
        [-3, -1, 0, 3, 7, 9,].forEach(number => expect(isDecreasingNumber(number)).toBe(false));
    });
    test('should return false if n >= 1000000', () => {
        [1000000, 2000000, 3000000].forEach(number => expect(isDecreasingNumber(number)).toBe(false));
    });
    test('should return false if n is not a decreasing number', () => {
        [123, 556, 666, 545].forEach(number => expect(isDecreasingNumber(number)).toBe(false));
    });
    test('should return true is n is a decreasing number', () => {
        [21, 43, 543, 6543, 98732].forEach(number => expect(isDecreasingNumber(number)).toBe(true));
    });
});