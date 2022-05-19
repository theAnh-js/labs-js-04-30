/**ARRAY-CD-03: Xoá một student có id cho trước
Viết hàm removeStudentById(studentList, studentId) để remove student có id là studentId ra khỏi
mảng studentList và trả về mảng mới.
const studentList = [
 { id: 1, name: 'Alice' },
 { id: 2, name: 'Bob' },
]
removeStudentById(studentList, 1); 
// should return:
// [
// { id: 2, name: 'Bob' },
// ]
removeStudentById(studentList, 3); 
// should return:
// [
// { id: 1, name: 'Alice' },
// { id: 2, name: 'Bob' },
// ] */
import { removeStudentById } from "./arr-CD-3";
describe("removeStudentById(studentList, studentId)", () => {
  test("should return [] if studentList is not an array", () => {
    expect(removeStudentById(3)).toEqual([]);
    expect(removeStudentById({})).toEqual([]);
    expect(removeStudentById(null)).toEqual([]);
    expect(removeStudentById(Boolean)).toEqual([]);
    expect(removeStudentById("string")).toEqual([]);
    expect(removeStudentById(undefined)).toEqual([]);
  });
  test("should return [] if studentList is empty", () => {
    expect(removeStudentById([])).toEqual([]);
  });
  test("should return [] if studenID is not a number", () => {
    expect(removeStudentById([{ id: 1, name: "Alice" }], "str")).toEqual([]);
    expect(removeStudentById([{ id: 1, name: "Alice" }], undefined)).toEqual(
      []
    );
    expect(removeStudentById([{ id: 1, name: "Alice" }], null)).toEqual([]);
    expect(removeStudentById([{ id: 1, name: "Alice" }], true)).toEqual([]);
    expect(removeStudentById([{ id: 1, name: "Alice" }], {})).toEqual([]);
    expect(removeStudentById([{ id: 1, name: "Alice" }], false)).toEqual([]);
    expect(removeStudentById([{ id: 1, name: "Alice" }], [])).toEqual([]);
  });
  test("should return original arr if studentId is a negative number", () => {
    expect(removeStudentById([{ id: 1, name: "Alide" }], -1)).toEqual([
      { id: 1, name: "Alide" },
    ]);
    expect(removeStudentById([{ id: 1, name: "Alide" }], -19)).toEqual([
      { id: 1, name: "Alide" },
    ]);
  });
  test("should return original arr if these is no valid ID", () => {
    expect(
      removeStudentById(
        [
          { id: 1, name: "Alice" },
          { id: 2, name: "Bob" },
        ],
        11
      )
    ).toEqual([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ]);

    expect(
      removeStudentById(
        [
          { id: 1, name: "Alice" },
          { id: 2, name: "Bob" },
          { id: 3, name: "Bob" },
        ],
        12
      )
    ).toEqual([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Bob" },
    ]);
  });
  test("should return new array after remove student ", () => {
    expect(
      removeStudentById(
        [
          { id: 1, name: "Alice" },
          { id: 2, name: "Bob" },
        ],
        1
      )
    ).toEqual([{ id: 2, name: "Bob" }]);

    expect(
      removeStudentById(
        [
          { id: 1, name: "Alice" },
          { id: 2, name: "Bob" },
          { id: 3, name: "Bob" },
        ],
        2
      )
    ).toEqual([
      { id: 1, name: "Alice" },
      { id: 3, name: "Bob" },
    ]);
  });
});
