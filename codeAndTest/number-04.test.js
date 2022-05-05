/**NUMBER-04: Kiểm tra số nguyên tố
Viết hàm isPrime(n) để kiểm tra n có phải là số nguyên tố không?
Số nguyên tố là số chỉ chia hết cho 1 và chính nó.
0 < n < 100000
Trả về true nếu là số nguyên tố, ngược lại trả về false.
Ví dụ:
isPrime(3) --> true
isPrime(4) --> false
isPrime(11) --> true */

import {isPrime, isPrimeV2} from './number-04';
describe('isPrice', () => {
    
    describe('isPrime(n)', () => {
        test('should return false if n <= 0', () => {
            expect(isPrime(0)).toBe(false);
            expect(isPrime(-1)).toBe(false);
        });
        test('should return false if n >= 100000', () => {
            expect(isPrime(100000)).toBe(false);
            expect(isPrime(200000)).toBe(false);
        });
        test('should return false if n is a prime number', () => {
            expect(isPrime(4)).toBe(false);
            expect(isPrime(8)).toBe(false);
            expect(isPrime(15)).toBe(false);
            expect(isPrime(30)).toBe(false);
        });
        test('should return true if n is a prime number', () => {
            [2,3,5,7,11,47,83].forEach(number => expect(isPrime(number)).toBe(true));
        });
    })
    
    describe('isPrimeV2(n)', () => {
        test('should return false if n <= 0', () => {
            expect(isPrimeV2(0)).toBe(false);
            expect(isPrimeV2(-1)).toBe(false);
        });
        test('should return false if n >= 100000', () => {
            expect(isPrimeV2(100000)).toBe(false);
            expect(isPrimeV2(200000)).toBe(false);
        });
        test('should return false if n is a prime number', () => {
            expect(isPrimeV2(4)).toBe(false);
            expect(isPrimeV2(8)).toBe(false);
            expect(isPrimeV2(15)).toBe(false);
            expect(isPrimeV2(30)).toBe(false);
        });
        test('should return true if n is a prime number', () => {
            [2,3,5,7,11,47,83].forEach(number => expect(isPrimeV2(number)).toBe(true));
        });
    })
});