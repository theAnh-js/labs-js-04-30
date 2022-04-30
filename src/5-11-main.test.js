import { getErrorMessage, getErrorMessage2 } from "./5-11-main";
describe('getErrorMessage', () => {
    test('should return "Invalid username or password" when errorCode = "E01"', () => {
        expect(getErrorMessage('E01')).toBe('Invalid username or password');
    })
    test('should return "Too many attempts" when errorCode = "E02"', () => {
        expect(getErrorMessage('E02')).toBe('Too many attempts');
    })
    test('should return "Missing data" when errorCode = "E03"', () => {
        expect(getErrorMessage('E03')).toBe('Missing data');
    })
    test('should return "Something went wrong" when errorCode is somwthing', () => {
        expect(getErrorMessage('something')).toBe('Something went wrong');
    })

});