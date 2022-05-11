export function findFirstIPhone(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return null;

  return (
    productList.find((product) => {
      let nameProduct = product.name.trim().split(" ");
      return nameProduct[0].toLowerCase() === "iphone";
    }) || null
  );
}
