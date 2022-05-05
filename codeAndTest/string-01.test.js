/**STRING-01: Ðếm số từ có trong câu
Viêt hàm countWords(str) để đếm số từ có trong str.
Ví dụ: countWords('easy frontend') --> 2 */

import { countWords, countWordsV2 } from './string-01';

describe('countWords', () => {
    describe('countWord(str)', () => {
        test('should return -1 if str is not string type', () => {
            expect(countWords(1)).toBe(-1);
            expect(countWords([])).toBe(-1);
            expect(countWords({})).toBe(-1);
            expect(countWords(() => { })).toBe(-1);
            expect(countWords(Boolean)).toBe(-1);
            expect(countWords(null || undefined)).toBe(-1);

        });
        test('should return acount of words in str', () => {
            expect(countWords('frontend')).toBe(1);
            expect(countWords('  easy frontend   ')).toBe(2);
            expect(countWords('learn easy frontend')).toBe(3);
            expect(countWords('let learn easy frontend   ')).toBe(4);
        });
    });

    describe('countWordsV2(str)', () => {
        test('should return -1 if str is not string type', () => {
            expect(countWordsV2(1)).toBe(-1);
            expect(countWordsV2([])).toBe(-1);
            expect(countWordsV2({})).toBe(-1);
            expect(countWordsV2(() => { })).toBe(-1);
            expect(countWordsV2(Boolean)).toBe(-1);
            expect(countWordsV2(null || undefined)).toBe(-1);

        });
        test('should return acount of words in str', () => {
            expect(countWordsV2('  frontend   ')).toBe(1);
            expect(countWordsV2('easy frontend')).toBe(2);
            expect(countWordsV2('learn easy frontend    ')).toBe(3);
            expect(countWordsV2('let learn easy frontend ')).toBe(4);
        });
    });

});