// Bài 25: Tính tổng tất cả các “ước số chẵn” của số nguyên dương n
import { sumOfEvenDivisors, sumOfEvenDivisorsV2 } from "./lab25-chapter";
describe('sum of even divisors', () => {
    test('should return -1 when n is not integer and less than or equal to 0', () => {
        expect(sumOfEvenDivisors(0)).toBe(-1);
        expect(sumOfEvenDivisors(-1)).toBe(-1);
        expect(sumOfEvenDivisors(2.6)).toBe(-1);
        expect(sumOfEvenDivisors(-2.6)).toBe(-1);
    });
    test('should return 0 when no even divisor', () => {
        expect(sumOfEvenDivisors(3)).toBe(0);
        expect(sumOfEvenDivisors(5)).toBe(0);
        expect(sumOfEvenDivisors(7)).toBe(0);
    });
    test('should return sum of even divisors of n', () => {
        expect(sumOfEvenDivisors(6)).toBe(2+6);
        expect(sumOfEvenDivisors(4)).toBe(2+4);
        expect(sumOfEvenDivisors(10)).toBe(2+10);
        expect(sumOfEvenDivisors(20)).toBe(2+4+10+20);
    });
});

describe('sum of even divisors', () => {
    test('should return -1 when n is not integer and less than or equal to 0', () => {
        expect(sumOfEvenDivisorsV2(0)).toBe(-1);
        expect(sumOfEvenDivisorsV2(-1)).toBe(-1);
        expect(sumOfEvenDivisorsV2(2.6)).toBe(-1);
        expect(sumOfEvenDivisorsV2(-2.6)).toBe(-1);
    });
    test('should return 0 when no even divisor', () => {
        expect(sumOfEvenDivisorsV2(3)).toBe(0);
        expect(sumOfEvenDivisorsV2(5)).toBe(0);
        expect(sumOfEvenDivisorsV2(7)).toBe(0);
    });
    test('should return sum of even divisors of n', () => {
        expect(sumOfEvenDivisorsV2(6)).toBe(2+6);
        expect(sumOfEvenDivisorsV2(4)).toBe(2+4);
        expect(sumOfEvenDivisorsV2(10)).toBe(2+10);
        expect(sumOfEvenDivisorsV2(20)).toBe(2+4+10+20);
    });
});