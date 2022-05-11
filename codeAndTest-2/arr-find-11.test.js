/**ARRAY-FIND-11: Tìm student có điểm môn toán lớn nhất đầu tiên
Viết hàm findStudentHavingHighestMark(studentList) để tìm ra student để điểm môn toán cao nhất. */
/**const studentList = [
 { id: 1, name: 'Alice', math: 9 },
 { id: 2, name: 'Bob', math: 10 },
 { id: 3, name: 'John', math: 10 },
];
findStudentHavingHighestMark(studentList); // { id: 2, name: 'Bob', math:
10 } */

import { findStudentHavingHighestMark } from "./arr-find-11";
describe("findStudentHavingHighestMark(studentList)", () => {
  test("should return null if student list is not an array", () => {
    expect(findStudentHavingHighestMark(3)).toBe(null);
    expect(findStudentHavingHighestMark({})).toBe(null);
    expect(findStudentHavingHighestMark(null)).toBe(null);
    expect(findStudentHavingHighestMark(Boolean)).toBe(null);
    expect(findStudentHavingHighestMark("string")).toBe(null);
    expect(findStudentHavingHighestMark(undefined)).toBe(null);
  });
  test("should return null when student list is empty", () => {
    expect(findStudentHavingHighestMark([])).toBe(null);
  });
  test("should return a student who has highest mark of math ", () => {
    expect(
      findStudentHavingHighestMark([
        { id: 1, name: "Alice", math: 9 },
        { id: 2, name: "Bob", math: 10 },
        { id: 3, name: "John", math: 10 },
      ])
    ).toEqual({ id: 2, name: "Bob", math: 10 });

    expect(
      findStudentHavingHighestMark([
        { id: 1, name: "Alice", math: 9 },
        { id: 2, name: "Bob", math: 3 },
        { id: 3, name: "John", math: 4 },
      ])
    ).toEqual({ id: 1, name: "Alice", math: 9 });

    expect(
      findStudentHavingHighestMark([
        { id: 1, name: "Alice", math: 7 },
        { id: 2, name: "Bob", math: 10 },
        { id: 3, name: "John", math: 9 },
      ])
    ).toEqual({ id: 2, name: "Bob", math: 10 });
    expect(
      findStudentHavingHighestMark([
        { id: 1, name: "Alice", math: 10 },
        { id: 2, name: "Bob", math: 10 },
        { id: 3, name: "John", math: 9 },
      ])
    ).toEqual({ id: 1, name: "Alice", math: 10 });
  });
});
