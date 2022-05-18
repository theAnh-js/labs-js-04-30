/**ARRAY-COUNT-03: Ðếm số từ có độ dài lớn hơn n
Viết hàm countWords(wordList, n) để đếm xem có bao nhiều từ có độ dài lớn hơn hoặc bằng n
countWords(['easy', 'frontend'], 4); // 2
countWords(['easy', 'frontend'], 5); // 1
countWords(['easy', 'frontend'], 10); // 0*/
import { countWords } from "./arr-count-3";
describe("countWords(wordList, n)", () => {
  test("should return 0 if numberList is not an array", () => {
    expect(countWords(3)).toBe(0);
    expect(countWords({})).toBe(0);
    expect(countWords(null)).toBe(0);
    expect(countWords(Boolean)).toBe(0);
    expect(countWords("string")).toBe(0);
    expect(countWords(undefined)).toBe(0);
  });
  test("should return 0 if numberList is empty", () => {
    expect(countWords([])).toBe(0);
  });
  test("should return 0 if n is not a number", () => {
    expect(countWords(["something"], "something")).toBe(0);
    expect(countWords(["something"], true)).toBe(0);
    expect(countWords(["something"], false)).toBe(0);
    expect(countWords(["something"], {})).toBe(0);
    expect(countWords(["something"], [3, 5, 4])).toBe(0);
  });
  test("should return 0 if n less than or equal to 0", () => {
    expect(countWords(["something"], 0)).toBe(0);
    expect(countWords(["something"], -2)).toBe(0);
    expect(countWords(["something"], -5)).toBe(0);
  });
  test("should return 0 if there is no invalid word", () => {
    expect(countWords(["something"], 89)).toBe(0);
    expect(countWords(["something", "hi", "see"], 33)).toBe(0);
    expect(countWords(["something", "hello", "goodbye"], 10)).toBe(0);
  });
  test("should return acount words that its length is greater than or equal to n", () => {
    expect(countWords(["", "so", "hy", "some"], 1)).toBe(3);
    expect(countWords(["something", "something"], 8)).toBe(2);
    expect(countWords(["", "thing", "something", "some"], 9)).toBe(1);
    expect(countWords(["", "something", "something", "some"], 9)).toBe(2);
  });
});
