import{calcAreaRectangle, calcPerimaterRectangl,  calcAreaCircle} from "./6-8-main"

describe('calculate area rectangle', () => {
    test('both parameters should be greater than 0', () => {
        expect(calcAreaRectangle(-1, -3)).toBe(-1);
        expect(calcAreaRectangle(-1, 3)).toBe(-1);
        expect(calcAreaRectangle(0, 3)).toBe(-1);
        expect(calcAreaRectangle(3, 0)).toBe(-1);
        expect(calcAreaRectangle(0, 0)).toBe(-1);
    })
    test('should return a result of the multiplying 2 parameters ', () => {
        expect(calcAreaRectangle(2,3)).toBe(6);
        expect(calcAreaRectangle(5,6)).toBe(30);
    })
});