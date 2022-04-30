

import { checkNumber , checkNumber2, checkNumber3, checkNumber4} from "./5-6-main";
describe('checkNumber', () => {
    test('should return false if the number is less than 0', () => {
        expect(checkNumber(-1)).toBe(false);
        expect(checkNumber(-2)).toBe(false);
    })
    test('should return false if the number is not divisible by 2', () => {
        expect(checkNumber(3)).toBe(false);
    })
    test('should return true if the number is divisible by 2 and greater than 0', () => {
        expect(checkNumber(2)).toBe(true);
    })
});
describe('checkNumber', () => {
    test('should return false if the number is less than 0', () => {
        expect(checkNumber(-1)).toBe(false);
        expect(checkNumber(-2)).toBe(false);
    })
    test('should return false if the number is not divisible by 2', () => {
        expect(checkNumber(3)).toBe(false);
    })
    test('should return true if the number is divisible by 2 and greater than 0', () => {
        expect(checkNumber(2)).toBe(true);
    })
});
describe('checkNumber2', () => {
    test('should return false if the number is less than 0', () => {
        expect(checkNumber2(-1)).toBe(false);
        expect(checkNumber2(-2)).toBe(false);
    })
    test('should return false if the number is not divisible by 2', () => {
        expect(checkNumber2(3)).toBe(false);
    })
    test('should return true if the number is divisible by 2 and greater than 0', () => {
        expect(checkNumber2(2)).toBe(true);
    })
});
describe('checkNumber3', () => {
    test('should return false if the number is less than 0', () => {
        expect(checkNumber3(-1)).toBe(false);
        expect(checkNumber3(-2)).toBe(false);
    })
    test('should return false if the number is not divisible by 2', () => {
        expect(checkNumber3(3)).toBe(false);
    })
    test('should return true if the number is divisible by 2 and greater than 0', () => {
        expect(checkNumber3(2)).toBe(true);
    })
});