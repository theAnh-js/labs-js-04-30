/** ARRAY-FIND-13: Tìm student đầu tiên có tất cả điểm >= 5, trừ một môn
Viết hàm findStudent(studentList) để tìm ra student đầu tiên có trong mảng có tất cả các điểm đều lớn
hơn hoặc bằng 5, tuy nhiên có một môn dưới 5.
*/
/** const studentList = [
 { id: 1, name: 'Alice', marks: { math: 9, english: 9, programming: 5 }
},
 { id: 2, name: 'Bob', marks: { math: 2, english: 3, programming: 5 } },
 { id: 3, name: 'John', marks: { math: 4, english: 7, programming: 9 } },
 { id: 4, name: 'Sarah', marks: { math: 2, english: 8, programming: 10 }
},
];
findStudent(studentList);
// { id: 3, name: 'John', marks: { math: 4, english: 7, programming: 9 } }
// vì đây là student đầu chỉ có duy nhất một môn dưới 5 điểm
*/

import { findStudent } from "./arr-find-13";
describe("findStudent(studentList)", () => {
  test("should return null if student list is not an array", () => {
    expect(findStudent(3)).toBe(null);
    expect(findStudent({})).toBe(null);
    expect(findStudent(null)).toBe(null);
    expect(findStudent(Boolean)).toBe(null);
    expect(findStudent("string")).toBe(null);
    expect(findStudent(undefined)).toBe(null);
  });
  test("should return null when student list is empty", () => {
    expect(findStudent([])).toBe(null);
  });

  test("should return null if has no student who has a subject less than 5 and rest all greater than 5 or equal to 5 ", () => {
    expect(
      findStudent([
        {
          id: 1,
          name: "Alice",
          marks: { math: 5, english: 5, programming: 5 },
        },
        { id: 2, name: "Bob", marks: { math: 7, english: 6, programming: 5 } },
        { id: 3, name: "John", marks: { math: 7, english: 7, programming: 9 } },
        {
          id: 4,
          name: "Sarah",
          marks: { math: 7, english: 8, programming: 10 },
        },
      ])
    ).toBe(null);
  });
  test("should return a student who has a subject less than 5 and rest all greater than 5 or equal to 5", () => {
    expect(
      findStudent([
        {
          id: 1,
          name: "Alice",
          marks: { math: 5, english: 5, programming: 4 },
        },
        { id: 2, name: "Bob", marks: { math: 2, english: 3, programming: 5 } },
        { id: 3, name: "John", marks: { math: 4, english: 7, programming: 9 } },
        {
          id: 4,
          name: "Sarah",
          marks: { math: 2, english: 8, programming: 10 },
        },
      ])
    ).toEqual({
      id: 1,
      name: "Alice",
      marks: { math: 5, english: 5, programming: 4 },
    });
    expect(
      findStudent([
        {
          id: 1,
          name: "Alice",
          marks: { math: 9, english: 9, programming: 5 },
        },
        { id: 2, name: "Bob", marks: { math: 2, english: 3, programming: 5 } },
        { id: 3, name: "John", marks: { math: 4, english: 7, programming: 9 } },
        {
          id: 4,
          name: "Sarah",
          marks: { math: 2, english: 8, programming: 10 },
        },
      ])
    ).toEqual({
      id: 3,
      name: "John",
      marks: { math: 4, english: 7, programming: 9 },
    });
    expect(
      findStudent([
        {
          id: 1,
          name: "Alice",
          marks: { math: 9, english: 9, programming: 5 },
        },
        { id: 2, name: "Bob", marks: { math: 2, english: 7, programming: 5 } },
        { id: 3, name: "John", marks: { math: 4, english: 7, programming: 9 } },
        {
          id: 4,
          name: "Sarah",
          marks: { math: 2, english: 8, programming: 10 },
        },
      ])
    ).toEqual({
      id: 2,
      name: "Bob",
      marks: { math: 2, english: 7, programming: 5 },
    });
  });
});
