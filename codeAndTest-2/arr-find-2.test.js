/**ARRAY-FIND-02: Tìm từ dài nhất nhưng nhỏ hơn 5 trong mảng
Viết hàm findLongestWord(wordList) để tìm ra từ dài nhất trong mảng wordList
Từ cần tìm có độ dài không quá 5
Từ cần tìm không có chứa khoảng trắng (space)
Trường hợp không tìm thấy từ thoả điều kiện thì trả về empty string.*/

/**findLongestWord([]); // ''
findLongestWord(['super', 'cool']); // 'super'
findLongestWord(['super', 'super cool']); 
// 'super' vì từ 'super cool' có chứa khoảng trắng và có độ dài lớn hơn 5
nên không tính */

import { findLongestWord } from "./arr-find-2";
describe("findLongestWord(wordList)", () => {
  test("should return empty string if wordList is not an array", () => {
    expect(findLongestWord(3)).toBe("");
    expect(findLongestWord({})).toBe("");
    expect(findLongestWord(null)).toBe("");
    expect(findLongestWord(Boolean)).toBe("");
    expect(findLongestWord("string")).toBe("");
    expect(findLongestWord(undefined)).toBe("");
  });
  test("should return empty string if wordList is empty", () => {
    expect(findLongestWord([])).toBe("");
  });
  test("should reutrn empty string if wordList has only string includes space", () => {
    expect(findLongestWord(["super cool"])).toBe("");
    expect(findLongestWord(["super cool", "1 3"])).toBe("");
  });
  test("should return empty string if wordList has only string that its length greater than 5", () => {
    expect(findLongestWord(["luongtheanh"])).toBe("");
    expect(findLongestWord(["", "", "hello"])).toBe("");
    expect(findLongestWord(["long ", "long ", "hello"])).toBe("");
    expect(findLongestWord(["more more", "hi hi", "hello"])).toBe("");
    expect(findLongestWord(["luongtheanh", "12345", "javascript"])).toBe("");
    expect(findLongestWord(["luongtheanh", "12345", "more javascript"])).toBe(
      ""
    );
  });
  test("should return the longest word < 5", () => {
    expect(findLongestWord(["anh"])).toBe("anh");
    expect(findLongestWord([" ", "", "1", "hello"])).toBe("1");
    expect(findLongestWord(["anh", "java"])).toBe("java");
    expect(findLongestWord(["english", "tv"])).toBe("tv");
    expect(findLongestWord(["long ", "big", "hello"])).toBe("big");
    expect(findLongestWord(["long", "long", "hello"])).toBe("long");
    expect(findLongestWord(["more more", "hi", "hello"])).toBe("hi");
    expect(findLongestWord(["a", "an", "an", "anh"])).toBe("anh");
    expect(findLongestWord(["more more", "hi helo", "hello", "sapa"])).toBe(
      "sapa"
    );
  });
});
