/**
 NUMBER-01: Kiểm tra số tăng dần
 Viết hàm isIncreasingNumber(n) để kiểm tra n có phải là số tăng dần hay không?
 0 < n < 1000000
 Số tăng dần có ít nhất 2 chữ số
 Chữ số bên phải luôn lớn hơn chữ số bên trái
 Trả về true nếu là số tăng dần, ngược lại trả về false.
 Ví dụ:
 isIncreasingNumber(11) --> false
 isIncreasingNumber(123) --> true
 isIncreasingNumber(12321) --> false*/


import {isIncreasingNumber, isIncreasingNumberV2} from './number-01';
describe('check if n is a increasing number', () => {
    test('should return false if n less than and equal to 0 or greater than 1000000 ', () => {
        [-3, -2, 0].forEach(number => expect(isIncreasingNumber(number)).toBe(false));
        [1111111, 13233456, 7123456]
        .forEach(number => expect(isIncreasingNumber(number)).toBe(false));
    });
    test('should return false if n < 10', () => {
        Array.from({length: 9}, (n, index) => index + 1)
        .forEach(number => expect(isIncreasingNumber(number)).toBe(false));
    });  

    test('shoulde return false if n is not a increasing number', () => {
        [132, 564, 21, 6537,555, 78932, 553, 3445]
        .forEach(number => expect(isIncreasingNumber(number)).toBe(false));
    });

    test('should return true is n is a increasing number', () => {
        [124, 3456, 45678, 123456, 456789]
        .forEach(number => expect(isIncreasingNumber(number)).toBe(true));
    });
});

describe('check if n is a increasing number', () => {
    test('should return false if n less than and equal to 0 or greater than 1000000 ', () => {
        [-3, -2, 0].forEach(number => expect(isIncreasingNumberV2(number)).toBe(false));
        [1111111, 13233456, 7123456]
        .forEach(number => expect(isIncreasingNumberV2(number)).toBe(false));
    });
    test('should return false if n < 10', () => {
        Array.from({length: 9}, (n, index) => index + 1)
        .forEach(number => expect(isIncreasingNumberV2(number)).toBe(false));
    });  

    test('shoulde return false if n is not a increasing number', () => {
        [132, 564, 21, 6537, 78932]
        .forEach(number => expect(isIncreasingNumberV2(number)).toBe(false));
    });

    test('should return true is n is a increasing number', () => {
        [124, 3456, 45678, 123456, 456789]
        .forEach(number => expect(isIncreasingNumberV2(number)).toBe(true));
    });
});