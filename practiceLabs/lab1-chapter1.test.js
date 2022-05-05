// Bài 1: Tính S(n) = 1 + 2 + 3 + … + n

/**
 * n <= 0 -> 0;
 * n >= 0 -> return S
 */

import{getSumV1, getSumV2, getSumV3} from './lab1-chapter1';

describe('getSumV1', () => {
    test('should return 0 if n less than or equal to 0', () => {
        expect(getSumV1(0)).toBe(0);
        expect(getSumV1(-2)).toBe(0);
    });
    test('should return sum if n is greater than 0', () => {
        expect(getSumV1(3)).toBe(6);
        expect(getSumV1(4)).toBe(10);
    })
});
describe('getSumV2', () => {
    test('should return 0 if n less than or equal to 0', () => {
        expect(getSumV2(0)).toBe(0);
        expect(getSumV2(-2)).toBe(0);
    });
    test('should return sum if n is greater than 0', () => {
        expect(getSumV2(3)).toBe(6);
        expect(getSumV2(4)).toBe(10);
    })
})

describe('getSumV3', () => {
    test('should return 0 if n less than or equal to 0', () => {
        expect(getSumV3(0)).toBe(0);
        expect(getSumV3(-2)).toBe(0);
    });
    test('should return sum if n is greater than 0', () => {
        expect(getSumV3(3)).toBe(6);
        expect(getSumV3(4)).toBe(10);
    })
})

console.log(getSumV1(3));
console.log(getSumV1(6));
console.log(getSumV1(10));

console.log(getSumV2(3));
console.log(getSumV2(6));
console.log(getSumV2(10));