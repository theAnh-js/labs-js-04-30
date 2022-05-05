// Bài 2: Tính S(n) = 1^2 + 2^2 + … + n^2

/**
 *  n <= 0 return 0;
 *  return sum if n >= 0;
 * */

import{sumV1, sumV2} from './lab2-chapter1';
describe('sum', () => {
    test('should return 0 if n <= 0', () => {
        expect(sumV1(0)).toBe(0);
        expect(sumV1(-1)).toBe(0);
    });
    test('should return sum if n >= 0', () => {
        expect(sumV1(2)).toBe(5);
        expect(sumV1(3)).toBe(14);
    })
});

describe('sum', () => {
    test('should return 0 if n <= 0', () => {
        expect(sumV2(0)).toBe(0);
        expect(sumV2(-1)).toBe(0);
    });
    test('should return sum if n >= 0', () => {
        expect(sumV2(2)).toBe(5);
        expect(sumV2(3)).toBe(14);
    })
});
console.log(sumV1(0));
console.log(sumV1(14));
console.log(sumV1(5));
console.log(sumV1(2));
console.log(sumV2(0));
console.log(sumV2(14));
console.log(sumV2(5));
console.log(sumV2(2));