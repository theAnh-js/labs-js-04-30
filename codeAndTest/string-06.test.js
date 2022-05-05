/**STRING-06: Hiển thị địa chỉ người dùng
Viết hàm getDisplayedAddress(address) để ghép chuỗi từ các thuộc tính của object address thành một
chuỗi address hoàn chỉnh
Chuỗi trả về có dạng: "address.number address.street, address.ward, address.district, address.city"
Lưu ý object address không phải lúc nào cũng có đầy đủ các thông tin trên. */

/**getDisplayedAddress({ 
 number: 123, 
 street: 'Nguyen Cong Tru', 
 ward: 'Ward 11', 
 district: 'Binh Thanh District', 
 city: 'HCMC'
});
// should return '123 Nguyen Cong Tru, Ward 11, Binh Thanh District, HCMC'
getDisplayedAddress({ 
 street: 'Nguyen Cong Tru', 
 district: 'Binh Thanh District'
});
// should return 'Nguyen Cong Tru, Binh Thanh District'
 */

import { getDisplayedAddress } from "./string-06";
describe("getDisplayedAddress(address)", () => {
  test("should return undefined if object has no any specified properties", () => {
    expect(getDisplayedAddress({})).toBe(undefined);
    expect(getDisplayedAddress({ cities: 222, dis: "nguyen yen" })).toBe(
      undefined
    );
    expect(getDisplayedAddress({ address: 222, streett: "nguyen yen" })).toBe(
      undefined
    );
    expect(getDisplayedAddress({ wardward: 222, streett: "nguyen yen" })).toBe(
      undefined
    );
  });
  test("should return str that show address taken from object", () => {
    expect(
      getDisplayedAddress({
        number: 123,
        street: "Nguyen Cong Tru",
        ward: "Ward 11",
        district: "Binh Thanh District",
        city: "HCMC",
      })
    ).toBe("123 Nguyen Cong Tru, Ward 11, Binh Thanh District, HCMC");
    expect(
      getDisplayedAddress({
        street: "Nguyen Cong Tru",
        district: "Binh Thanh District",
      })
    ).toBe("Nguyen Cong Tru, Binh Thanh District");
    expect(
      getDisplayedAddress({
        ward: "Ward 11",
        district: "Binh Thanh District",
        city: "HCMC",
      })
    ).toBe("Ward 11, Binh Thanh District, HCMC");

    expect(getDisplayedAddress({ street: "Nguyen Cong Tru" })).toBe(
      "Nguyen Cong Tru"
    );
  });
});
