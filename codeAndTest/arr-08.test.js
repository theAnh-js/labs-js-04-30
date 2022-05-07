/**ARRAY-CHECK-08: Kiểm tra có sản phẩm nhỏ hơn giá cho trước và free ship không
Viết hàm hasFreeShip(productList, price) để kiểm tra xem có product nào freeship và giá nhỏ hơn price
không? */
/** const productList = [
 { id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 },
 { id: 2, name: 'Iphone 16 Pro Max', isFreeShip: true, price: 1500000 },
];
hasFreeShip(productList, 10000000); // true vì id số 2 thoả điều kiện đề
bài*/

import { hasFreeShip } from "./arr-08";
describe("hasFreeShip(productList, price)", () => {
  test("should return false if not free", () => {
    expect(
      hasFreeShip(
        [
          { id: 1, name: "Iphone 16", isFreeShip: false, price: 10200500 },
          {
            id: 2,
            name: "Iphone 16 Pro Max",
            isFreeShip: false,
            price: 1500000,
          },
        ],
        10000
      )
    ).toBe(false);
    expect(
      hasFreeShip(
        [
          { id: 1, name: "Iphone 16", isFreeShip: false, price: 225 },
          { id: 2, name: "Iphone 16 Pro Max", isFreeShip: false, price: 50 },
        ],
        500
      )
    ).toBe(false);
  });

  test("should return false if price < price of productList", () => {
    expect(
      hasFreeShip(
        [
          { id: 1, name: "Iphone 16", isFreeShip: true, price: 900 },
          {
            id: 2,
            name: "Iphone 16 Pro Max",
            isFreeShip: false,
            price: 1500000,
          },
        ],
        850
      )
    ).toBe(false);
    expect(
      hasFreeShip(
        [
          { id: 1, name: "Iphone 16", isFreeShip: true, price: 30 },
          { id: 2, name: "Iphone 16 Pro Max", isFreeShip: true, price: 50 },
        ],
        20
      )
    ).toBe(false);
  });

  test("should true when product is free ship and price <= price of productList", () => {
    expect(
      hasFreeShip(
        [
          { id: 1, name: "Iphone 16", isFreeShip: false, price: 10200500 },
          {
            id: 2,
            name: "Pro Max",
            isFreeShip: true,
            price: 1500000,
          },
        ],
        10000000
      )
    ).toBe(true);
    expect(
      hasFreeShip(
        [
          { id: 1, name: "Iphone 16", isFreeShip: true, price: 10 },
          {
            id: 2,
            name: "Pro Max",
            isFreeShip: true,
            price: 20,
          },
        ],
        50
      )
    ).toBe(true);
    expect(
      hasFreeShip(
        [
          { id: 1, name: "Iphone 16", isFreeShip: true, price: 10 },
          {
            id: 2,
            name: "Pro Max",
            isFreeShip: true,
            price: 20,
          },
        ],
        10
      )
    ).toBe(true);
  });
});
