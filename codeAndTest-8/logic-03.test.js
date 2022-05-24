/**LOGIC-03: Thống kê số lần xuất hiện của các số trong mảng
Viết hàm statisticsNumbers(numberList) để thống kê số lần xuất hiện của các số trong mảng
numberList.
statisticsNumbers([]); // {}
statisticsNumbers([1, 1, 1, 2, 2, 3]);
// should return 
// { 
// 1: 3, 
// 2: 2, 
// 3: 1
//  */
import { statisticsNumbers } from "./logic-03";
describe("statisticsNumbers(numberList)", () => {
  test("should return empty object if numberList is not an array", () => {
    expect(statisticsNumbers(3)).toEqual({});
    expect(statisticsNumbers({})).toEqual({});
    expect(statisticsNumbers(null)).toEqual({});
    expect(statisticsNumbers(Boolean)).toEqual({});
    expect(statisticsNumbers("string")).toEqual({});
    expect(statisticsNumbers(undefined)).toEqual({});
  });
  test("should return empty object if numberList is empty", () => {
    expect(statisticsNumbers([])).toEqual({});
  });
  test("should return statistics of occurences of numbers", () => {
    expect(statisticsNumbers([1, 1, 1, 2, 2, 3])).toEqual({ 1: 3, 2: 2, 3: 1 });
    expect(statisticsNumbers([1, 1, 2, 2, 3, 4, 6, 4, 4])).toEqual({
      1: 2,
      2: 2,
      3: 1,
      4: 3,
      6: 1,
    });
  });
});
