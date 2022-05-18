export function findAllIphones(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return [];

  return productList.filter(
    (product) =>
      product.name.toLowerCase().includes("iphone") && product.amount > 0
  );
}
