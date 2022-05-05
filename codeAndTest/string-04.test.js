/**STRING-04: Ðếm số lượng email có trong câu
Viết hàm countEmails(str) để đếm số lượng email có trong str
Email là một chuỗi có chứa ký tự @ ở giữa và không phải ở cuối từ.
Email có thể có một số domain như: .com, .vn, .com.vn. Domain sẽ xuất hiện ở cuối từ.
Email có định dạng là X@Y. Trong đó X có độ dài ít nhất 3 ký tự, Y có độ dài ít nhất 3 ký tự (ko tính
phần domain nêu trên)
Trả về số lượng email tìm thấy từ chuỗi truyền vào.
Lưu ý: không sử dụng regular expression.
Ví dụ:
countEmails('my email should be abc@super.com') --> 1
countEmails('my email should be a@a.com') --> 0
countEmails('my email should be @ bla .com') --> 0
countEmails('my email should be easy@frontend.com or easy@frontend.com.vn or
easy@frontend.vn') --> 3 
*/
import { countEmails } from "./string-04";

describe("countEmails(str)", () => {
  test("should return 0 if str is not string type", () => {
    expect(countEmails([])).toBe(0);
    expect(countEmails({})).toBe(0);
    expect(countEmails(3)).toBe(0);
    expect(countEmails(() => {})).toBe(0);
    expect(countEmails(Boolean)).toBe(0);
    expect(countEmails(undefined || 0)).toBe(0);
  });
  test("should return 0 if str is empty", () => {
    expect(countEmails("")).toBe(0);
    expect(countEmails(" ")).toBe(0);
  });
  test("should return 0 if str has no domain", () => {
    expect(countEmails("theanh@theanh ")).toBe(0);
    expect(countEmails("theanh@theanh.co")).toBe(0);
    expect(countEmails("theanh@theanh.v")).toBe(0);
  });
  test("should return 0 if str has no @", () => {
    expect(countEmails("theanhtheanh")).toBe(0);
    expect(countEmails("theanhtheanh.com")).toBe(0);
    expect(countEmails("theanhtheanh.vn")).toBe(0);
  });
  test("should return 0 if before and after @ has no at least 3 characters", () => {
    expect(countEmails("thea@th")).toBe(0);
    expect(countEmails("th@theanh")).toBe(0);
    expect(countEmails("ea@th.com")).toBe(0);
    expect(countEmails("thea@.vn ")).toBe(0);
    expect(countEmails(" @th")).toBe(0);
    expect(countEmails(" @t")).toBe(0);
    expect(countEmails(" something@h")).toBe(0);
    expect(countEmails(" something @ h")).toBe(0);
    expect(countEmails(" something @ ")).toBe(0);
    expect(countEmails(" @ something")).toBe(0);
  });
  test("should return acount of emails", () => {
    expect(countEmails("my email should be abc@super.com")).toBe(1);
    expect(
      countEmails(
        "my email should be abc@super.com and hoanbao1999@gmail.com.vn"
      )
    ).toBe(2);
    expect(
      countEmails(" abc@super.com is my email and his email is anh@anh.com")
    ).toBe(2);
    expect(
      countEmails("abc@super.com is my email and his email is anh@anh.vn")
    ).toBe(2);
    expect(
      countEmails(
        "my email should be easy@frontend.com or easy@frontend.com.vn or easy@frontend.vn"
      )
    ).toBe(3);
  });
});
