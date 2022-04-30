import { randomNumber } from "./6-7-main";
describe('random a number', () => {
    test('should random a number between 2 paramesters', () => {
        expect(randomNumber(2, 5)).toBeGreaterThanOrEqual(2);
        expect(randomNumber(2, 5)).toBeLessThanOrEqual(5);
    })
    test('first paramester should be less than second paramester', () => {
        expect(randomNumber(3, 1)).toBe(-1);
        expect(randomNumber(5, 5)).toBe(-1);
    })
});