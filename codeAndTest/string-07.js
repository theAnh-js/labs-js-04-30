/**fillPath('/categories/:categoryId/products/:productId', { 
 categoryId: 1, 
 productId: 2
});
// should return '/categories/1/products/2' */

export function fillPath(path, params) {
  if (path.length === 0 || path === " ") return "";

  let itemList = [];
  let strID = "";
  path.split("/").forEach((item) => {
    if (!item.includes(":") && item !== "") itemList.push(item);
    if (item.includes(":")) strID += item;
  });

  let itemIDList = strID.split(":");
  let idList = [];
  itemIDList.forEach((itemID) => {
    if (params[itemID] && itemID !== "") idList.push(params[itemID]);
    if (!params[itemID] && itemID !== "") idList.push(`:${itemID}`);
  });

  let output = "";
  for (let i = 0; i < itemList.length; i++) {
    output += `/${itemList[i]}/${idList[i]}`;
  }
  return output;
}

//V2
export function fillPathV2(path, params) {
  if (
    typeof path !== "string" ||
    typeof params !== "object" ||
    path === "" ||
    path === " "
  )
    return "";

  for (const key in params) {
    path = path.replace(`:${key}`, params[key]);
  }
  return path;
}
