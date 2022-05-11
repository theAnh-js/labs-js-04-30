/**ARRAY-FIND-15: Tìm sản phẩm đầu tiên có tên bắt đầu bằng chữ iphone (không phân biệt hoa
thường)
Viết hàm findFirstIPhone(productList) để tìm ra sản phẩm dòng IPhone đầu tiên */
/**const productList = [
 { id: 1, name: 'Samsung' },
 { id: 2, name: 'IPHONE X' },
 { id: 3, name: 'iPhone 12 Pro' },
];
findFirstIPhone(productList); 
// { id: 2, name: 'IPHONE X' }*/

import { findFirstIPhone } from "./arr-find-15";
describe("findFirstIPhone(productList)", () => {
  test("should return null if student list is not an array", () => {
    expect(findFirstIPhone(3)).toBe(null);
    expect(findFirstIPhone({})).toBe(null);
    expect(findFirstIPhone(null)).toBe(null);
    expect(findFirstIPhone(Boolean)).toBe(null);
    expect(findFirstIPhone("string")).toBe(null);
    expect(findFirstIPhone(undefined)).toBe(null);
  });
  test("should return null when student list is empty", () => {
    expect(findFirstIPhone([])).toBe(null);
  });
  test("should return null if has no element first by iphone", () => {
    expect(
      findFirstIPhone([
        { id: 1, name: "Samsung" },
        { id: 2, name: "IPHOE X" },
        { id: 3, name: "iPhoe12 Pro" },
      ])
    ).toBe(null);
    expect(
      findFirstIPhone([
        { id: 1, name: "Samsung" },
        { id: 2, name: "iphon X" },
        { id: 3, name: "i Phone 12 Pro" },
      ])
    ).toBe(null);
  });
  test("should return firt element when it has first by iphone", () => {
    expect(
      findFirstIPhone([
        { id: 1, name: "Samsung" },
        { id: 2, name: "IPHONE X" },
        { id: 3, name: "iPhone 12 Pro" },
      ])
    ).toEqual({ id: 2, name: "IPHONE X" });

    expect(
      findFirstIPhone([
        { id: 1, name: "Samsung" },
        { id: 3, name: "iPhOnE 12 Pro" },
        { id: 2, name: "IPHONE X" },
      ])
    ).toEqual({ id: 3, name: "iPhOnE 12 Pro" });

    expect(
      findFirstIPhone([
        { id: 1, name: "Samsung" },
        { id: 2, name: "IPHON E X" },
        { id: 3, name: " iPhone 12 Pro" },
      ])
    ).toEqual({ id: 3, name: " iPhone 12 Pro" });
  });
});
