/**
 * ARRAY-CHECK-06: Kiểm tra có student có id nào đó trong mảng không
Viết hàm hasStudent(studentList, studentId) để kiểm tra trong mảng studentList có student nào có id là
studentId không?
*/
/** const studentList = [
 { id: 1, name: 'Easy' },
 { id: 2, name: 'Frontend' },
];
hasStudent(studentList, 1); // true
hasStudent(studentList, 3); // false
*/
import { hasStudent } from "./arr-06";
describe("hasStudent(studentList, studentId)", () => {
  test("should return false if the word list is not an array", () => {
    expect(hasStudent(3)).toBe(false);
    expect(hasStudent({})).toBe(false);
    expect(hasStudent(null)).toBe(false);
    expect(hasStudent(Boolean)).toBe(false);
    expect(hasStudent("string")).toBe(false);
    expect(hasStudent(undefined)).toBe(false);
  });
  test("should return false if the word list is empty", () => {
    expect(hasStudent([])).toBe(false);
  });
  test("should false if studentId is not a number", () => {
    expect(hasStudent([{ id: 1, name: "Easy" }], "1")).toBe(false);
    expect(hasStudent([{ id: 1, name: "Easy" }], "string")).toBe(false);
  });
  test("should return false if has no studentId in the list", () => {
    expect(
      hasStudent(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
        ],
        5
      )
    ).toBe(false);
    expect(
      hasStudent(
        [
          { id: 1, name: "Easy" },
          { id: 4, name: "Frontend" },
        ],
        2
      )
    ).toBe(false);
    expect(
      hasStudent(
        [
          { id: 1, name: "Easy" },
          { id: 4, name: "Frontend" },
        ],
        0
      )
    ).toBe(false);
  });

  test("should return true if has studentId in the list", () => {
    expect(
      hasStudent(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
        ],
        1
      )
    ).toBe(true);
    expect(
      hasStudent(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
          { id: 5, name: "Frontend" },
        ],
        5
      )
    ).toBe(true);
    expect(
      hasStudent(
        [
          { id: 11, name: "Easy" },
          { id: 12, name: "Frontend" },
          { id: 15, name: "Frontend" },
        ],
        11
      )
    ).toBe(true);
  });
});
