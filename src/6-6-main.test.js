import {randomNumber} from'./6-6-main.js'
describe('randomNumber', () => {
    test('should return -1 when n less than 0', () => {
        expect(randomNumber(-2)).toBe(-1);
        expect(randomNumber(-1)).toBe(-1);
    })
    test('should return a random number between 0 and n when n is greater than 0', () => {
        expect(randomNumber(2)).toBeGreaterThanOrEqual(0);
        expect(randomNumber(2)).toBeLessThanOrEqual(2);
        expect(randomNumber(4)).toBeGreaterThanOrEqual(0);
        expect(randomNumber(4)).toBeLessThanOrEqual(4);
    })
});

randomNumber(4);
randomNumber(4);
randomNumber(4);
randomNumber(2);
randomNumber(2);