/**ARRAY-CHECK-07: Kiểm tra có student giới tính là Nữ tên Alice không
Viết hàm hasAlice(studentList) để kiểm tra trong mảng studentList có student nữ nào tên là Alice không?
(không phân biệt hoa thường) */
/** const studentList = [
 { id: 1, name: 'Alice', gender: 'male' },
 { id: 2, name: 'aliCE', gender: 'female' },
 { id: 3, name: 'Easy Frontend', gender: 'male' },
];
hasAlice(studentList); // true
*/
import { hasAlice } from "./arr-07";
describe("hasAlice", () => {
  test("should return false if not Alice", () => {
    expect(
      hasAlice([
        { id: 1, name: "Alice", gender: "male" },
        { id: 2, name: "E", gender: "female" },
        { id: 3, name: "Easy Frontend", gender: "male" },
      ])
    ).toBe(false);
    expect(
      hasAlice([
        { id: 1, name: "Alice", gender: "male" },
        { id: 2, name: "Alice", gender: "male" },
        { id: 3, name: "Easy Frontend", gender: "male" },
      ])
    ).toBe(false);
    expect(
      hasAlice([
        { id: 1, name: "Alice", gender: "male" },
        { id: 2, name: "Alic", gender: "female" },
        { id: 3, name: "Easy Frontend", gender: "male" },
      ])
    ).toBe(false);
  });
  test("should return true if female Alice is in student list", () => {
    expect(
      hasAlice([
        { id: 1, name: "Alice", gender: "male" },
        { id: 2, name: "Alice", gender: "female" },
        { id: 3, name: "Easy Frontend", gender: "male" },
      ])
    ).toBe(true);
    expect(
      hasAlice([
        { id: 1, name: "Alice", gender: "famale" },
        { id: 2, name: "Alice", gender: "female" },
        { id: 3, name: "Easy Frontend", gender: "male" },
      ])
    ).toBe(true);

    expect(
      hasAlice([
        { id: 1, name: "Alice", gender: "male" },
        { id: 2, name: "ALICE", gender: "female" },
        { id: 3, name: "Easy Frontend", gender: "male" },
      ])
    ).toBe(true);
    expect(
      hasAlice([
        { id: 1, name: "Alice", gender: "male" },
        { id: 2, name: "aLiCe", gender: "female" },
        { id: 3, name: "Easy Frontend", gender: "male" },
      ])
    ).toBe(true);
    expect(
      hasAlice([
        { id: 1, name: "Alice", gender: "male" },
        { id: 2, name: "alice", gender: "female" },
        { id: 3, name: "Easy Frontend", gender: "male" },
      ])
    ).toBe(true);
    expect(
      hasAlice([
        { id: 1, name: "Alice", gender: "male" },
        { id: 2, name: "alicE", gender: "female" },
        { id: 3, name: "Easy Frontend", gender: "male" },
      ])
    ).toBe(true);
  });
});
