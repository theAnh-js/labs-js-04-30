/**STRING-02: Thống kê số lượng từ trong câu
Viết hàm statisticsWords(str) để đếm tần số xuất hiện của môi từ trong str.
Trả về một object với:
key là từ có xuất hiện trong str
value là số lần xuất hiện của key
*/
// statisticsWords('easy frontend easy')
// should return an object like this: { easy: 2, frontend: 1 }


import { statisticsWords } from './string-02';
describe('statisticsWords(str)', () => {
    test('should return null if type of tring is not string', () => {
        expect(statisticsWords([])).toBe(null);
        expect(statisticsWords({})).toBe(null);
        expect(statisticsWords(3)).toBe(null);
        expect(statisticsWords(() => { })).toBe(null);
        expect(statisticsWords(Boolean)).toBe(null);
        expect(statisticsWords(undefined || null)).toBe(null);
    });

    test('should return null if str is empty', () => {
        expect(statisticsWords(' ')).toBe(null);
    });
    test('should return null if str has no items', () => {
        expect(statisticsWords('')).toBe(null);
    });
    test('should return an object', () => {
        expect(statisticsWords('frontend')).toEqual({ frontend: 1 });
        expect(statisticsWords('easy frontend')).toEqual({ easy: 1, frontend: 1 });
        expect(statisticsWords('easy frontend easy ')).toEqual({ easy: 2, frontend: 1 });
        expect(statisticsWords('easy frontend frontend frontend')).toEqual({ easy: 1, frontend: 3 });
        expect(statisticsWords('I learn easy frontend')).toEqual({ I: 1, learn: 1, easy: 1, frontend: 1 });
    });
});