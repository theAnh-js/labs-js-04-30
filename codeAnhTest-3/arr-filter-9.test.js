/**ARRAY-FILTER-09: Tìm tất cả sản phẩm thuộc dòng iphone và còn hàng trong kho
Viết hàm findAllIphones(productList) để tìm ra tất cả các product có tên chứa chữ iphone (ko phân biệt
hoa thường) và vẫn còn hàng trong kho (amount > 0)
const productList = [
 { id: 1, name: 'Luxury IPhone X', amount: 1 },
 { id: 2, name: 'Super Cool iphone 16 Pro', amount: 0 },
 { id: 3, name: 'iphone 20 Pro', amount: 2 },
];
findAllIphones(productList);
// should return the following list:
// [
// { id: 1, name: 'Luxury IPhone X', amount: 1 },
// { id: 3, name: 'iphone 20 Pro', amount: 2 },
// ]; */

import { findAllIphones } from "./arr-filter-9";
describe("findAllIphones(productList)", () => {
  test("should return empty array if numberList is not an array", () => {
    expect(findAllIphones(3)).toEqual([]);
    expect(findAllIphones({})).toEqual([]);
    expect(findAllIphones(null)).toEqual([]);
    expect(findAllIphones(Boolean)).toEqual([]);
    expect(findAllIphones("string")).toEqual([]);
    expect(findAllIphones(undefined)).toEqual([]);
  });
  test("should return empty array if numberList is empty", () => {
    expect(findAllIphones([])).toEqual([]);
  });
  test('should return empty if no "iphone" or amount = 0', () => {
    expect(
      findAllIphones([
        { id: 1, name: "Luxury phonei X", amount: 1 },
        { id: 2, name: "Super Cool iphone 16 Pro", amount: 0 },
        { id: 3, name: "phone 20 Pro", amount: 2 },
      ])
    ).toEqual([]);
    expect(
      findAllIphones([
        { id: 1, name: "Luxury iphone X", amount: 0 },
        { id: 2, name: "Super Cool iphone 16 Pro", amount: 0 },
        { id: 3, name: "phone 20 Pro", amount: 20 },
      ])
    ).toEqual([]);
  });
  test('should return product includes "iphone" and amount > 0', () => {
    expect(
      findAllIphones([
        { id: 1, name: "Luxury IPhone X", amount: 1 },
        { id: 2, name: "Super Cool iphone 16 Pro", amount: 0 },
        { id: 3, name: "iphone 20 Pro", amount: 2 },
      ])
    ).toEqual([
      { id: 1, name: "Luxury IPhone X", amount: 1 },
      { id: 3, name: "iphone 20 Pro", amount: 2 },
    ]);

    expect(
      findAllIphones([
        { id: 1, name: "Luxury IPhoNe X", amount: 6 },
        { id: 2, name: "Super Cool iphone 16 Pro", amount: 10 },
        { id: 3, name: "iphone 20 Pro", amount: 0 },
      ])
    ).toEqual([
      { id: 1, name: "Luxury IPhoNe X", amount: 6 },
      { id: 2, name: "Super Cool iphone 16 Pro", amount: 10 },
    ]);
  });
});
