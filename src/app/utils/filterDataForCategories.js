export function filterDataForCategories(
  product,
  category,
  categoriesIds,
  collectionId
) {
  let products = [];

  for (const categoryId in categoriesIds) {
    for (const prod in product) {
      if (
        categoriesIds[categoryId] === product[prod].category &&
        product[prod].collection === collectionId
      ) {
        products.push(product[prod]);
      }
    }
  }

  const data = createCategoryArray(categoriesIds, category, products);
  return data;
}

function createCategoryArray(categoriesIds, category, product) {
  let data = [];
  for (const id in categoriesIds) {
    for (const categoryId in category) {
      if (categoriesIds[id] === category[categoryId].id) {
        data.push({
          id: category[categoryId].id,
          name: category[categoryId].name,
          products: createProductsArray(product, category[categoryId].id),
        });
      }
    }
  }
  return data;
}

function createProductsArray(product, categoryId) {
  const array = product.filter((p) => p.category === categoryId);
  return array;
}
