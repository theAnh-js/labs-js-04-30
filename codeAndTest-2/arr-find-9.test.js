/** ARRAY-FIND-09: Tìm vị trí của student có id cho trước
Viết hàm findStudentById(studentList, studentId) để tìm ra vị trí của student có id bằng với studentId.*/
/**const studentList = [
 { id: 1, name: 'Easy' },
 { id: 2, name: 'Frontend' },
]
findStudentById(studentList, 1); // 0
findStudentById(studentList, 3); // -1 */
import { findStudentById, findStudentByIdV2 } from "./arr-find-9";
describe("findStudentById(studentList, studentId)", () => {
  test("should return undefined if numberList is not an array", () => {
    expect(findStudentById(3, 3)).toBe(-1);
    expect(findStudentById({}, 3)).toBe(-1);
    expect(findStudentById(null, 3)).toBe(-1);
    expect(findStudentById(Boolean, 3)).toBe(-1);
    expect(findStudentById("string", 3)).toBe(-1);
    expect(findStudentById(undefined, 3)).toBe(-1);
  });
  test("should return undefined when numberList is empty", () => {
    expect(findStudentById([], 3)).toBe(-1);
  });
  test("should return -1 if studentId is not a number", () => {
    expect(findStudentById([], "")).toBe(-1);
    expect(findStudentById([], [])).toBe(-1);
    expect(findStudentById([], {})).toBe(-1);
    expect(findStudentById([], Boolean)).toBe(-1);
    expect(findStudentById([], null || undefined)).toBe(-1);
  });
  test("should return -1 is no student has the id", () => {
    expect(
      findStudentById(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
        ],
        4
      )
    ).toBe(-1);

    expect(
      findStudentById(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
        ],
        0
      )
    ).toBe(-1);
  });
  test("should return position of student if has the same id", () => {
    expect(
      findStudentById(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
        ],
        1
      )
    ).toBe(0);
    expect(
      findStudentById(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
          { id: 5, name: "Frontend" },
        ],
        5
      )
    ).toBe(2);

    expect(
      findStudentById(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
        ],
        2
      )
    ).toBe(1);
    expect(
      findStudentById(
        [
          { id: 11, name: "Easy" },
          { id: 2, name: "Frontend" },
          { id: 22, name: "Frontend" },
        ],
        11
      )
    ).toBe(0);
  });
});
describe("findStudentByIdV2(studentList, studentId)", () => {
  test("should return undefined if numberList is not an array", () => {
    expect(findStudentByIdV2(3, 3)).toBe(-1);
    expect(findStudentByIdV2({}, 3)).toBe(-1);
    expect(findStudentByIdV2(null, 3)).toBe(-1);
    expect(findStudentByIdV2(Boolean, 3)).toBe(-1);
    expect(findStudentByIdV2("string", 3)).toBe(-1);
    expect(findStudentByIdV2(undefined, 3)).toBe(-1);
  });
  test("should return undefined when numberList is empty", () => {
    expect(findStudentByIdV2([], 3)).toBe(-1);
  });
  test("should return -1 if studentId is not a number", () => {
    expect(findStudentByIdV2([], "")).toBe(-1);
    expect(findStudentByIdV2([], [])).toBe(-1);
    expect(findStudentByIdV2([], {})).toBe(-1);
    expect(findStudentByIdV2([], Boolean)).toBe(-1);
    expect(findStudentByIdV2([], null || undefined)).toBe(-1);
  });
  test("should return -1 is no student has the id", () => {
    expect(
      findStudentByIdV2(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
        ],
        4
      )
    ).toBe(-1);

    expect(
      findStudentByIdV2(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
        ],
        0
      )
    ).toBe(-1);
  });
  test("should return position of student if has the same id", () => {
    expect(
      findStudentByIdV2(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
        ],
        1
      )
    ).toBe(0);
    expect(
      findStudentByIdV2(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
          { id: 5, name: "Frontend" },
        ],
        5
      )
    ).toBe(2);

    expect(
      findStudentByIdV2(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
        ],
        2
      )
    ).toBe(1);
    expect(
      findStudentByIdV2(
        [
          { id: 11, name: "Easy" },
          { id: 2, name: "Frontend" },
          { id: 22, name: "Frontend" },
        ],
        11
      )
    ).toBe(0);
  });
});
