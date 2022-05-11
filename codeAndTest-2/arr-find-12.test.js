/**ARRAY-FIND-12: Tìm student có điểm trung bình môn thấp nhất cuối cùng
Viết hàm findLastStudentHavingMinAvg(studentList) để tìm ra student có điểm trung bình môn thấp nhất
cuối cùng trong mảng. */
/**const studentList = [
 { id: 1, name: 'Alice', math: 9, english: 9 },
 { id: 2, name: 'Bob', math: 5, english: 5 },
 { id: 3, name: 'John', math: 5, english: 5 },
];
findStudentHavingHighestMark(studentList); 
// { id: 3, name: 'John', math: 5, english: 5 } */
import { findLastStudentHavingMinAvg } from "./arr-find-12";
describe("findLastStudentHavingMinAvg(studentList)", () => {
  test("should return null if student list is not an array", () => {
    expect(findLastStudentHavingMinAvg(3)).toBe(null);
    expect(findLastStudentHavingMinAvg({})).toBe(null);
    expect(findLastStudentHavingMinAvg(null)).toBe(null);
    expect(findLastStudentHavingMinAvg(Boolean)).toBe(null);
    expect(findLastStudentHavingMinAvg("string")).toBe(null);
    expect(findLastStudentHavingMinAvg(undefined)).toBe(null);
  });
  test("should return null when student list is empty", () => {
    expect(findLastStudentHavingMinAvg([])).toBe(null);
  });
  test(" should return LastStudentHavingMinAvg", () => {
    expect(
      findLastStudentHavingMinAvg([
        { id: 1, name: "Alice", math: 9, english: 9 },
        { id: 2, name: "Bob", math: 5, english: 5 },
        { id: 3, name: "John", math: 5, english: 5 },
      ])
    ).toEqual({ id: 3, name: "John", math: 5, english: 5 });

    expect(
      findLastStudentHavingMinAvg([
        { id: 1, name: "Alice", math: 9, english: 9 },
        { id: 2, name: "Bob", math: 5, english: 5 },
        { id: 3, name: "John", math: 5, english: 5 },
      ])
    ).toEqual({ id: 3, name: "John", math: 5, english: 5 });
    expect(
      findLastStudentHavingMinAvg([
        { id: 1, name: "Alice", math: 9, english: 9 },
        { id: 2, name: "Bob", math: 4, english: 5 },
        { id: 3, name: "John", math: 5, english: 5 },
      ])
    ).toEqual({ id: 2, name: "Bob", math: 4, english: 5 });

    expect(
      findLastStudentHavingMinAvg([
        { id: 1, name: "Alice", math: 6, english: 7 },
        { id: 2, name: "Bob", math: 10, english: 9 },
        { id: 3, name: "John", math: 8, english: 9 },
      ])
    ).toEqual({ id: 1, name: "Alice", math: 6, english: 7 });

    expect(
      findLastStudentHavingMinAvg([
        { id: 1, name: "Alice", math: 6, english: 7 },
        { id: 2, name: "Bob", math: 6, english: 7 },
        { id: 3, name: "John", math: 8, english: 9 },
      ])
    ).toEqual({ id: 2, name: "Bob", math: 6, english: 7 });
  });
});
