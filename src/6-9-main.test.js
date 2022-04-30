import{isEven,isOdd,isPerfectSquare}from './6-9-main';

describe('isEven', () => {
    test('should return true if the number is even', () => {
        expect(isEven(2)).toBe(true);
        expect(isEven(4)).toBe(true);
        expect(isEven(0)).toBe(true);
    })
    test('should return false if the number is odd', () => {
        expect(isEven(1)).toBe(false);
        expect(isEven(3)).toBe(false);
        expect(isEven(15)).toBe(false);
    })
});
describe('isOdd', () => {
    test('should return true if the number is odd', () => {
        expect(isOdd(3)).toBe(true);
        expect(isOdd(5)).toBe(true);
        expect(isOdd(9)).toBe(true);
    });
    test('should return false if the number is even', () => {
        expect(isOdd(2)).toBe(false);
        expect(isOdd(10)).toBe(false);
        expect(isOdd(20)).toBe(false);
    });
});
describe('isPerfectSquare', () => {
    test(' should return false if n less than or equal 0', () => {
        expect(isPerfectSquare(0)).toBe(false);
        expect(isPerfectSquare(-1)).toBe(false);
    });
    test('should return false if square root of n is not equal n', () => {
        expect(isPerfectSquare(15)).toBe(false);
        expect(isPerfectSquare(10)).toBe(false);
        expect(isPerfectSquare(90)).toBe(false);
    });
    test('should return true if square root of n is equal n', () => {
        expect(isPerfectSquare(25)).toBe(true);
        expect(isPerfectSquare(16)).toBe(true);
        expect(isPerfectSquare(9)).toBe(true);
    });

});