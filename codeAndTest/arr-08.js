/**
export function hasFreeShip(productList, price) {
  return productList.some((product) => {
    return product.isFreeShip === true && product.price <= price;
  });
}*/

/**export function hasFreeShip(productList, price) {
  return productList.some((product) => {
    return product.isFreeShip && product.price <= price;
  });
} */

export function hasFreeShip(productList, price) {
  return productList.some(
    (product) => product.isFreeShip && product.price <= price
  );
}
