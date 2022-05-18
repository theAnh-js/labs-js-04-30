/**ARRAY-COUNT-06: Ðếm số lượng students có điểm trung bình lớn hơn hoặc bằng avgMark
Viết hàm countStudents(studentList, avgMark) để đếm số lượng student có điểm trung bình môn lớn hơn
hoặc bằng avgMark
Cách tính điểm trung bình môn:
Giả sử mình không biết trước sẽ có bao nhiêu môn
Dựa vào object marks để xác định, có bao nhiêu keys là bấy nhiêu môn và tính điểm trung bình môn
tương ứng.
Một student list sẽ đảm bảo là số lượng keys trong object marks sẽ giống nhau.
const studentList = [
 { id: 1, name: 'Alice', marks: { math: 8 } },
 { id: 2, name: 'Bob', marks: { math: 9 } },
]
countStudents(studentList, 7); // 2
const studentList = [
 { id: 1, name: 'Alice', marks: { math: 5, english: 6 } },
 { id: 2, name: 'Bob', marks: { math: 9, english: 8 } },
]
countStudents(studentList, 7); // 1*/

import { countStudents } from "./arr-count-6";
describe("countStudents(studentList, avgMark)", () => {
  test("should return 0 if numberList is not an array", () => {
    expect(countStudents(3)).toBe(0);
    expect(countStudents({})).toBe(0);
    expect(countStudents(null)).toBe(0);
    expect(countStudents(Boolean)).toBe(0);
    expect(countStudents("string")).toBe(0);
    expect(countStudents(undefined)).toBe(0);
  });
  test("should return 0 if numberList is empty", () => {
    expect(countStudents([])).toBe(0);
  });
  test("should return 0 if vagMark less than 0 or greater than 10", () => {
    expect(
      countStudents(
        [{ id: 1, name: "Alice", marks: { math: 5, english: 6 } }],
        -1
      )
    ).toBe(0);
    expect(
      countStudents(
        [{ id: 1, name: "Alice", marks: { math: 5, english: 6 } }],
        11
      )
    ).toBe(0);
    expect(
      countStudents(
        [{ id: 1, name: "Alice", marks: { math: 5, english: 6 } }],
        -3
      )
    ).toBe(0);
    expect(
      countStudents(
        [{ id: 1, name: "Alice", marks: { math: 5, english: 6 } }],
        44
      )
    ).toBe(0);
    expect(
      countStudents(
        [{ id: 1, name: "Alice", marks: { math: 5, english: 6 } }],
        33
      )
    ).toBe(0);
    expect(
      countStudents(
        [{ id: 1, name: "Alice", marks: { math: 5, english: 6 } }],
        -3
      )
    ).toBe(0);
  });

  test("should return acount of students has average mark greater than or equal to avgMark", () => {
    expect(
      countStudents(
        [
          { id: 1, name: "Alice", marks: { math: 8 } },
          { id: 2, name: "Bob", marks: { math: 9 } },
        ],
        7
      )
    ).toBe(2);

    expect(
      countStudents(
        [
          { id: 1, name: "Alice", marks: { math: 8 } },
          { id: 2, name: "Bob", marks: { math: 6 } },
          { id: 3, name: "Bob", marks: { math: 9 } },
        ],
        7
      )
    ).toBe(2);

    expect(
      countStudents(
        [
          { id: 1, name: "Alice", marks: { math: 10, english: 10 } },
          { id: 2, name: "Bob", marks: { math: 9, english: 9 } },
          { id: 3, name: "Bob", marks: { math: 10, english: 10 } },
          { id: 4, name: "Bob", marks: { math: 9, english: 6 } },
        ],
        10
      )
    ).toBe(2);

    expect(
      countStudents(
        [
          { id: 1, name: "Alice", marks: { math: 10, english: 10, music: 10 } },
          { id: 2, name: "Bob", marks: { math: 9, english: 9, music: 6 } },
          { id: 3, name: "Bob", marks: { math: 10, english: 10, music: 10 } },
          { id: 4, name: "Bob", marks: { math: 9, english: 6, music: 8 } },
        ],
        3
      )
    ).toBe(4);

    expect(
      countStudents(
        [
          {
            id: 1,
            name: "Alice",
            marks: { math: 10, english: 10, music: 10, japanese: 6 },
          },
          {
            id: 2,
            name: "Bob",
            marks: { math: 9, english: 9, music: 6, japanese: 6 },
          },
          {
            id: 3,
            name: "Bob",
            marks: { math: 10, english: 10, music: 10, japanese: 10 },
          },
          {
            id: 4,
            name: "Bob",
            marks: { math: 9, english: 6, music: 8, japanese: 6 },
          },
          {
            id: 5,
            name: "Bob",
            marks: { math: 10, english: 10, music: 10, japanese: 10 },
          },
        ],
        10
      )
    ).toBe(2);
    expect(
      countStudents(
        [
          {
            id: 1,
            name: "Alice",
            marks: { math: 10, english: 10, music: 10, japanese: 6 },
          },
          {
            id: 2,
            name: "Bob",
            marks: { math: 9, english: 9, music: 6, japanese: 6 },
          },
          {
            id: 3,
            name: "Bob",
            marks: { math: 10, english: 0, music: 10, japanese: 10 },
          },
          {
            id: 4,
            name: "Bob",
            marks: { math: 9, english: 6, music: 8, japanese: 6 },
          },
        ],
        10
      )
    ).toBe(0);
  });
});
