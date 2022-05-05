/**STRING-03: Thống kê ký tự có trong câu
Viết hàm statisticsCharacters(str) để thống kê số lượng ký tự có trong câu.
Trả về một object với:
key là character có xuất hiện trong str. Nếu là khoảng trắng thì key="space".
value là số lần xuất hiện của key.

statisticsCharacters('aa b cc ')
should return an object like this:{ a: 2, b: 1, c: 2, space: 3 }
*/

import { statisticsCharacters } from "./string-03";

describe('statisticsCharacters(str)', () => {
    test('should return null if type of tring is not string', () => {
        expect(statisticsCharacters([])).toBe(null);
        expect(statisticsCharacters({})).toBe(null);
        expect(statisticsCharacters(3)).toBe(null);
        expect(statisticsCharacters(() => { })).toBe(null);
        expect(statisticsCharacters(Boolean)).toBe(null);
        expect(statisticsCharacters(undefined || null)).toBe(null);
    });
    test('should return null if str is empty', () => {
        expect(statisticsCharacters('')).toBe(null);
    });
    test('should retun an object', () => {
        expect(statisticsCharacters('aa b cc ')).toEqual({ a: 2, b: 1, c: 2, space: 3 });
        expect(statisticsCharacters(' easy ')).toEqual({ e: 1, a: 1, s: 1, y: 1, space: 2 });
        expect(statisticsCharacters(' ac cb  bb dd  ')).toEqual({ a: 1, c: 2, b: 3, d: 2, space: 7 });
    });
});