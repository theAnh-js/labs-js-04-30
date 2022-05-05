/**NUMBER-09: Kiểm tra số có tổng của 2 chữ số bằng số cho trước
Viết hàm hasTwoDigitsWithSum(n, sum) để kiểm tra n (9 < n < 1000000) có chứa 2 chữ số bất kỳ nào có
tổng bằng sum (0 < sum < 19) cho trước không?
Ví dụ:
hasTwoDigitsWithSum(10, 1) --> true vì 0 + 1 = 1
hasTwoDigitsWithSum(101, 3) --> false vì không có 2 chữ số nào cộng lại bằng 3
hasTwoDigitsWithSum(11, 2) --> true
 */

import { hasTwoDigitsWithSum } from './number-09'
describe('hasTwoDigitsWithSum(n, sum)', () => {
    test('should return false if n <= 9', () => {
        expect(hasTwoDigitsWithSum(-1)).toBe(false);
        expect(hasTwoDigitsWithSum(0)).toBe(false);
        expect(hasTwoDigitsWithSum(1)).toBe(false);
        expect(hasTwoDigitsWithSum(7)).toBe(false);
        expect(hasTwoDigitsWithSum(9)).toBe(false);
    });

    test('should return false if n >= 1000000', () => {
        expect(hasTwoDigitsWithSum(1000000)).toBe(false);
        expect(hasTwoDigitsWithSum(1200000)).toBe(false);
    });

    test('should return false if sum <= 0', () => {
        expect(hasTwoDigitsWithSum(123, 0)).toBe(false);
        expect(hasTwoDigitsWithSum(123, -2)).toBe(false);
        expect(hasTwoDigitsWithSum(123, -1)).toBe(false);
        expect(hasTwoDigitsWithSum(123, -4)).toBe(false);
    });
    test('should return false if sum >= 19', () => {
        expect(hasTwoDigitsWithSum(123, 19)).toBe(false);
        expect(hasTwoDigitsWithSum(123, 20)).toBe(false);
        expect(hasTwoDigitsWithSum(123, 30)).toBe(false);
    });
    test('should return false if n no has any two digit that sum of they equal to "sum"', () => {
        expect(hasTwoDigitsWithSum(123, 7)).toBe(false);
        expect(hasTwoDigitsWithSum(55, 11)).toBe(false);
        expect(hasTwoDigitsWithSum(476, 9)).toBe(false);
        expect(hasTwoDigitsWithSum(666, 13)).toBe(false);
    });

    test('should return true if n has two digit that sum of they equal to "sum"', () => {
        expect(hasTwoDigitsWithSum(12, 3)).toBe(true);
        expect(hasTwoDigitsWithSum(123, 5)).toBe(true);
        expect(hasTwoDigitsWithSum(1236, 9)).toBe(true);
        expect(hasTwoDigitsWithSum(5555, 10)).toBe(true);
        expect(hasTwoDigitsWithSum(555567, 12)).toBe(true);
        expect(hasTwoDigitsWithSum(555567, 13)).toBe(true);
        expect(hasTwoDigitsWithSum(555678, 15)).toBe(true);
        expect(hasTwoDigitsWithSum(555678, 13)).toBe(true);
        expect(hasTwoDigitsWithSum(595678, 17)).toBe(true);
    });
});


