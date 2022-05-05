/**Viết hàm hasEasyFrontend(wordList) để kiểm tra xem nội dung tất cả các từ có chứa easy và frontend
không nhé
Trả về true nếu:
Một phần tử có chứa cả 2 từ: "easy" và "frontend"
Một phần tử chứa từ "easy" và một phần tử khác chứa "frontend" */
/** hasEasyFrontend(['easy', '']); // false
hasEasyFrontend(['easy', 'frontend']); // true
hasEasyFrontend(['easy frontend', '']); // true*/

import { hasEasyFrontend } from "./arr-03";
describe("hasEasyFrontend(wordList)", () => {
  test("should return false if the word list is not an array", () => {
    expect(hasEasyFrontend(3)).toBe(false);
    expect(hasEasyFrontend({})).toBe(false);
    expect(hasEasyFrontend(null)).toBe(false);
    expect(hasEasyFrontend(Boolean)).toBe(false);
    expect(hasEasyFrontend("string")).toBe(false);
    expect(hasEasyFrontend(undefined)).toBe(false);
  });
  test("should return false if the word list is empty", () => {
    expect(hasEasyFrontend([])).toBe(false);
  });
  test('should return false if the list word has no "easy frontend"', () => {
    expect(hasEasyFrontend(["easy", ""])).toBe(false);
    expect(hasEasyFrontend(["easy", "easy"])).toBe(false);
    expect(hasEasyFrontend(["fonten", "easy"])).toBe(false);
    expect(hasEasyFrontend(["frontend", "eas"])).toBe(false);
    expect(hasEasyFrontend(["fr ontend", "easy"])).toBe(false);
    expect(hasEasyFrontend(["", "", "something"])).toBe(false);
    expect(hasEasyFrontend(["rfontend", "frontend"])).toBe(false);
    expect(hasEasyFrontend([" s  eay frontend", " "])).toBe(false);
    expect(hasEasyFrontend(["  easy fron tend", " "])).toBe(false);
  });

  test('should return true if the list word has "easy frontend"', () => {
    expect(hasEasyFrontend(["easy", "frontend"])).toBe(true);
    expect(hasEasyFrontend(["frontend", "easy"])).toBe(true);
    expect(hasEasyFrontend(["easy", "something", "   frontend"])).toBe(true);
    expect(hasEasyFrontend(["easy", "something", "js", "frontend"])).toBe(true);
    expect(hasEasyFrontend(["frontend    ea sy", "easy", "fron tend"])).toBe(
      true
    );
    expect(hasEasyFrontend([" easy frontend", " "])).toBe(true);

    expect(
      hasEasyFrontend(["I'm learning js at easy frontend ", "blabla"])
    ).toBe(true);
  });
});
