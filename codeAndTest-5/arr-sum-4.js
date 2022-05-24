//v1
export function calcCartTotal(cartItemList) {
  if (!Array.isArray(cartItemList) || cartItemList.length === 0) return 0;

  return cartItemList.reduce(
    (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity,
    0
  );
}
//V2
/**
 export function calcCartTotal(cartItemList) {
   if (!Array.isArray(cartItemList) || cartItemList.length === 0) return 0;
 
   let total = 0;
   cartItemList.forEach((pro) => {
     total += pro.product.price * pro.quantity;
   });
   return total;
 }* */
