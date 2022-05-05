// address.number address.street, address.ward, address.district, address.city
export function getDisplayedAddress(address) {
  if (
    !address.hasOwnProperty("number") &&
    !address.hasOwnProperty("street") &&
    !address.hasOwnProperty("district") &&
    !address.hasOwnProperty("city") &&
    !address.hasOwnProperty("ward")
  ) {
    return undefined;
  }

  let properties = ["number", "street", "ward", "district", "city"];
  let propertyList = properties.filter(
    (property) => address[property] !== undefined
    // (property) => address.hasOwnProperty(property) === true;
  );

  let hasNumber = "";
  let rest = [];
  propertyList.forEach((property) => {
    if (property === "number") hasNumber += `${address[property]} `;
    if (property !== "number") rest.push(address[property]);
  });

  return `${hasNumber}${rest.join(", ")}`;
}
