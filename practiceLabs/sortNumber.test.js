import { sortIncreasingNumber } from "./sortNumber";
describe("sortIncreasingNumber(a, b, c)", () => {
  test("should return -1 if or a or b or c is not a number", () => {
    expect(sortIncreasingNumber("", 1, 3)).toBe(-1);
    expect(sortIncreasingNumber("4")).toBe(-1);
    expect(sortIncreasingNumber(true, 7, "")).toBe(-1);
    expect(sortIncreasingNumber("")).toBe(-1);
  });
  test("should return increasing sorted a,b,c", () => {
    expect(sortIncreasingNumber(1, 5, 3)).toBe("1-3-5");
    expect(sortIncreasingNumber(1, 0, 3)).toBe("0-1-3");
    expect(sortIncreasingNumber(1, 5, 5)).toBe("1-5-5");
    expect(sortIncreasingNumber(6, 5, 6)).toBe("5-6-6");
    expect(sortIncreasingNumber(1, 1, 1)).toBe("1-1-1");
    expect(sortIncreasingNumber(10, 19, 13)).toBe("10-13-19");
  });
});
