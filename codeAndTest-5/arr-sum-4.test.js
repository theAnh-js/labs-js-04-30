/** ARRAY-SUM-04: Tổng tiền của giỏ hàng
Viết hàm calcCartTotal(cartItemList) để tính tổng tiền của giỏ hàng.
const cartItemList = [
 { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
 { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
];
calcCartTotal(cartItemList); // 250000 = 50 x 1 + 100000 x 2
*/

import { calcCartTotal } from "./arr-sum-4";
describe("calcCartTotal(cartItemList)", () => {
  test("should return 0 if numberList is not an array", () => {
    expect(calcCartTotal(3)).toBe(0);
    expect(calcCartTotal({})).toBe(0);
    expect(calcCartTotal(null)).toBe(0);
    expect(calcCartTotal(Boolean)).toBe(0);
    expect(calcCartTotal("string")).toBe(0);
    expect(calcCartTotal(undefined)).toBe(0);
  });
  test("should return 0 if numberList is empty", () => {
    expect(calcCartTotal([])).toBe(0);
  });
  test("should return total of products in the cart", () => {
    expect(
      calcCartTotal([
        { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
        { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
      ])
    ).toBe(250000);

    expect(
      calcCartTotal([
        { id: 1, product: { id: 1, price: 50000 }, quantity: 0 },
        { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
      ])
    ).toBe(200000);
    expect(
      calcCartTotal([
        { id: 1, product: { id: 1, price: 50000 }, quantity: 0 },
        { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
        { id: 2, product: { id: 2, price: 100000 }, quantity: 3 },
      ])
    ).toBe(500000);
  });
});
