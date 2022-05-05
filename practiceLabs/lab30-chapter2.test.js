// Bài 30: Cho số nguyên dương n. Kiểm tra xem n có phải là số hoàn thiện hay không

import{checkIfPerfectNumber}from './lab30-chapter2';
describe('check if n is a perfect number', () => {
    test('should return -1 if n is not integer and n <= 0', () => {
        expect(checkIfPerfectNumber(0)).toBe(-1);
        expect(checkIfPerfectNumber(-4)).toBe(-1);
        expect(checkIfPerfectNumber(4.5)).toBe(-1);
    });

    test('should return false if n is a perfect number', () => {
        expect(checkIfPerfectNumber(10)).toBe(false);
        expect(checkIfPerfectNumber(27)).toBe(false);
        expect(checkIfPerfectNumber(46)).toBe(false);
        expect(checkIfPerfectNumber(8125)).toBe(false);

    });
    test('should return true if n is a perfect number', () => {
        expect(checkIfPerfectNumber(6)).toBe(true);
        expect(checkIfPerfectNumber(28)).toBe(true);
        expect(checkIfPerfectNumber(496)).toBe(true);
        expect(checkIfPerfectNumber(8128)).toBe(true);

    });
});