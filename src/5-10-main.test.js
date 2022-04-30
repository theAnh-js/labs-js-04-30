import { classifyStudent } from "./5-10-main";
describe('classifyStudent', () => {
    test('should return "Bad"  when mark = [0, 3]', () => {
        [0,1,2,3].forEach((mark) => {
            expect(classifyStudent(mark)).toBe('Bad');
        })
    })
    test('should return "Not good" when mark = [4,6]', () => {
        [4,5,6].forEach((mark) => {
            expect(classifyStudent(mark)).toBe('Not good');
        })
    })
    test('should return "Good" when mark = [7,8]', () => {
        expect(classifyStudent(7)).toBe('Good');
        expect(classifyStudent(8)).toBe('Good');
    })
    test('should return "Excellence" when mark = [9,10]', () => {
        expect(classifyStudent(9)).toBe('Excellent');
        expect(classifyStudent(10)).toBe('Excellent');
    })
    test('should return "Invalid mark" when mark less than 0 or greater than 10', () => {
        expect(classifyStudent(-1)).toBe('Invalid mark');
        expect(classifyStudent(11)).toBe('Invalid mark');
    })
});