function buildCategoryMapV2(categoryList) {
  // your code here
  if (!Array.isArray(categoryList) || categoryList.length === 0)
    return new Map();

  let categoryMap = new Map();
  categoryList.forEach((category) => {
    categoryMap.set(category.id, category);
  });
  return categoryMap;
}
console.log(
  buildCategoryMapV2([
    { id: 1, name: "iphone" },
    { id: 2, name: "samsum" },
  ])
);
console.log(buildCategoryMapV2([]));

console.log(new Map());
