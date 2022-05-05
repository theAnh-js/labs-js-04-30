/**
 * NUMBER-03: Kiểm tra số tăng dần đều theo khoảng cách cho trước
Viết hàm isIncreasingNumberByDistance(n, x) để kiểm tra n có phải là số tăng dần đều với khoảng cách
giữa 2 chữ số là x không?
0 < n < 1000000, 0 < x < 5
Số tăng dần có ít nhất 2 chữ số
Chữ số bên phải luôn lớn hơn chữ số bên trái
Khoảng cách của 2 chữ số liền kề là x
Trả về true nếu là số tăng dần đều theo khoảng cách x, ngược lại trả về false.
Ví dụ:
isIncreasingNumberByDistance(11, 1) --> false
isIncreasingNumberByDistance(123, 1) --> true
isIncreasingNumberByDistance(135, 2) --> true
isIncreasingNumberByDistance(135, 1) --> false
*/

import { isIncreasingNumberByDistance, isIncreasingNumberByDistanceV2 } from "./number-03";
describe('isIncreasingNumberByDistance(n,x)', () => {
    test('should return false if n < 10', () => {
        expect(isIncreasingNumberByDistance(0)).toBe(false);
        expect(isIncreasingNumberByDistance(3)).toBe(false);
        expect(isIncreasingNumberByDistance(-3)).toBe(false);
    });
    test('should return false if n >= 1000000', () => {
        expect(isIncreasingNumberByDistance(1000000)).toBe(false);
        expect(isIncreasingNumberByDistance(2000000)).toBe(false);
        expect(isIncreasingNumberByDistance(4000000)).toBe(false);
    });
    test('should return false if x less than or equal to 0', () => {
        expect(isIncreasingNumberByDistance(123, 0)).toBe(false);
        expect(isIncreasingNumberByDistance(123, -3)).toBe(false);
        expect(isIncreasingNumberByDistance(123, 5)).toBe(false);
    });
    test('should return false if n is not a increasing number by x', () => {
        [235, 569, 1267, 4323, 6543, 2369]
        .forEach(number => expect(isIncreasingNumberByDistance(number)).toBe(false));
    });

    test('should return true if n is a increasing number by x', () => {
        expect(isIncreasingNumberByDistance(123, 1)).toBe(true);
        expect(isIncreasingNumberByDistance(147, 3)).toBe(true);
        expect(isIncreasingNumberByDistance(159, 4)).toBe(true);
        expect(isIncreasingNumberByDistance(234567, 1)).toBe(true);
    });
});


describe('isIncreasingNumberByDistanceV2(n,x)', () => {
    test('should return false if n < 10', () => {
        expect(isIncreasingNumberByDistanceV2(0)).toBe(false);
        expect(isIncreasingNumberByDistanceV2(3)).toBe(false);
        expect(isIncreasingNumberByDistanceV2(-3)).toBe(false);
    });
    test('should return false if n >= 1000000', () => {
        expect(isIncreasingNumberByDistanceV2(1000000)).toBe(false);
        expect(isIncreasingNumberByDistanceV2(2000000)).toBe(false);
        expect(isIncreasingNumberByDistanceV2(4000000)).toBe(false);
    });
    test('should return false if x less than or equal to 0', () => {
        expect(isIncreasingNumberByDistanceV2(123, 0)).toBe(false);
        expect(isIncreasingNumberByDistanceV2(123, -3)).toBe(false);
        expect(isIncreasingNumberByDistanceV2(123, 5)).toBe(false);
    });
    test('should return false if n is not a increasing number by x', () => {
        [235, 569, 1267, 4323, 6543, 2369]
        .forEach(number => expect(isIncreasingNumberByDistanceV2(number)).toBe(false));
    });

    test('should return true if n is a increasing number by x', () => {
        expect(isIncreasingNumberByDistanceV2(123, 1)).toBe(true);
        expect(isIncreasingNumberByDistanceV2(147, 3)).toBe(true);
        expect(isIncreasingNumberByDistanceV2(159, 4)).toBe(true);
        expect(isIncreasingNumberByDistanceV2(234567, 1)).toBe(true);
    });
});