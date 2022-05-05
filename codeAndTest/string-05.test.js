/**STRING-05: Ðếm số lượng url có trong câu
Viết hàm countURLs(str) để đếm số lượng URLs có trong câu.
URL có định dạng: protocol://domain.com/path-name
URL có thể bắt đầu bằng protocol như: http, https, ws hoặc wss
Domain có thể là .com, .com.vn hoặc .vn
Phần tên domain phải có ít nhất 3 ký tự, như abc.com, chứ ab.com là không hợp lệ
Trả về số lượng URLs tìm thấy trong câu.
Lưu ý: không sử dụng regular expression.
Ví dụ:
countURLs('my website is: http://ezfrontend.com you can visit it') --> 1
countURLs('my website is: https://ez.com you can visit it') --> 0 vì phần tên domain chỉ có 2 ký tự ez
nên không hợp lệ */

import { count } from "yargs";
import { countURLs } from "./string-05";
describe("countURLs(str)", () => {
  test("should return 0 if parameter is not string type", () => {
    expect(countURLs([])).toBe(0);
    expect(countURLs({})).toBe(0);
    expect(countURLs(() => {})).toBe(0);
    expect(countURLs(2)).toBe(0);
    expect(countURLs(null || undefined)).toBe(0);
    expect(countURLs(Boolean)).toBe(0);
  });
  test("should return 0 when str is empty ", () => {
    expect(countURLs("")).toBe(0);
    expect(countURLs(" ")).toBe(0);
  });
  test("should return 0 if no found a valid url", () => {
    expect(countURLs("my website is: http:ez.co you can visit it")).toBe(0);
    expect(countURLs("my website is: tps://ez.co you can visit it")).toBe(0);
    expect(countURLs("my website is: https://ez.co you can visit it")).toBe(0);
    expect(countURLs("my website is: https://ez.com you can visit it")).toBe(0);
    expect(countURLs("my website is: http://example..com  can visit it")).toBe(
      0
    );
    expect(
      countURLs("my website is: https:ezfontend.com you can visit it")
    ).toBe(0);
    expect(
      countURLs("my website is: htt://ezfontend.com you can visit it")
    ).toBe(0);
    expect(
      countURLs("my website is: https://hello.com.vnyou can visit it")
    ).toBe(0);
    expect(
      countURLs("my website is: protocol://domain.com you can visit it")
    ).toBe(0);
    expect(
      countURLs("my website is: http://example.com..vn you can visit it")
    ).toBe(0);
  });
  test("should return acount of valid url", () => {
    expect(countURLs("my website is: http://example.vn you can visit it")).toBe(
      1
    );
    expect(
      countURLs("my website is: http://example.com you can visit it")
    ).toBe(1);
    expect(
      countURLs(" wss://example.com & http://ezfrontend.vn you can visit it")
    ).toBe(2);
    expect(
      countURLs("my website is: http://ezfrontend.com and https://google.com ")
    ).toBe(2);
    expect(
      countURLs(
        "my website is: https://domain.com you can https://example.com.vn  visit it"
      )
    ).toBe(2);
    expect(
      countURLs(
        "my website is: http://google.com you  http://google.com can  https://google.com visit it"
      )
    ).toBe(3);
    expect(
      countURLs(
        " ws://example.com.vn my website is: https://example.com.vn you can ws://example.com visit it"
      )
    ).toBe(3);
  });
});
